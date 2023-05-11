import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}


  checkRoute(){
    if (this.router.url === "/game") {
      return "inicio";
    }
    if(this.router.url === "/userRecord"){
      return "historial";
    }
    if(this.router.url === "/login") {
      return "login";
    }
    else{
      return "";
    }
  }
   
}


