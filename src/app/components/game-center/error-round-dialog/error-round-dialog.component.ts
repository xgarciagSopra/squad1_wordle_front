import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-round-dialog',
  templateUrl: './error-round-dialog.component.html',
  styleUrls: ['./error-round-dialog.component.scss'],
})

export class ErrorRoundDialogComponent {

  constructor(private router:Router){}

  reload() {
    this.router.navigate(['/login'])  
  }
}
