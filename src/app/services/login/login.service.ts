import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host, port } from '../../interfaces/variables';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://' + host + ':' + port;

  sendDecodeDataBase64(email: string, password: string) {
    this.http.post<any>(this.baseURL + '/login', { email, password });
  }
}
