import { Component } from '@angular/core';
import { fromByteArray } from 'base64-js';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  encodeDataBase64(data: string) {
    return fromByteArray(new TextEncoder().encode(data));
  }
}
