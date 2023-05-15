import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host, port } from '../../interfaces/variables';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://' + host + ':' + port;

  sendFormInfo(name: string, password: string): Observable<any>{
    return this.http.post<any>(this.baseURL + '/login', { name, password });
  }
}
