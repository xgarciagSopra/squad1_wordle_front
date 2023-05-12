import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  HOME_ROUTE = "/game-center";
  LOGIN_ROUTE = "/login";
  RECORD_ROUTE = "/user-record"

  constructor(public location: Location){}


}
   



