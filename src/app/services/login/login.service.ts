import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host, port } from '../../interfaces/variables';
import { Observable } from 'rxjs';
import { ULogin } from 'src/app/interfaces/u-login';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://' + host + ':' + port;

  sendFormInfo(name: string, password: string): Observable<ULogin>{
    return this.http.post<any>(this.baseURL + '/login', { name, password });
  }
}
