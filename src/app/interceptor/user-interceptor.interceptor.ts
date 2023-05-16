import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { UserService } from '../services/user/user.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserInterceptorInterceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();
    if (token) {
      request = request.clone({
       setHeaders: {Authorization: `Bearer ${token}`}
      });
    }

 return next.handle(request).pipe(
   catchError((err) => {
     if (err instanceof HttpErrorResponse) {
         if (err.status === 401) {
          this.router.navigate(['/login'])
      }
   }
   return throwError(err);
 })
  )
 }
}


