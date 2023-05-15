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

@Injectable()
export class UserInterceptorInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();
    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
       setHeaders: {Authorization: `Bearer ${token}`}
      });
    }
  console.log(request.body);
  
 return next.handle(request).pipe(
   catchError((err) => {
     if (err instanceof HttpErrorResponse) {
         if (err.status === 401) {
         // redirect user to the logout page
      }
   }
   return throwError(err);
 })
  )
 }
}


