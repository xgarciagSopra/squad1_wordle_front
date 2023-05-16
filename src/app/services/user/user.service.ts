import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  public setToken(token: string)
  {
    localStorage.setItem("token",token);
  }

  public getToken()
  {
    return localStorage.getItem("token");
  }
}

