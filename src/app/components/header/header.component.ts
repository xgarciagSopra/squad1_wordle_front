import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedRoute: string = this.checkRoute();

  constructor(private location: Location){}


  checkRoute(): string{
    if (this.location.path() === "/game-center") {
      return "inicio";
    }
    if(this.location.path() === "/user-record"){
      return "historial";
    }
    if(this.location.path() === "/login") {
      return "login";
    }
    else{
      return "login";
    }
  }
   
}


