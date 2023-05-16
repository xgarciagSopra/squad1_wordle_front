import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win-round-dialog',
  templateUrl: './win-round-dialog.component.html',
  styleUrls: ['./win-round-dialog.component.scss'],
})
export class WinRoundDialogComponent {
  constructor(private router:Router){}

  reloadWindow() {
    this.router.navigate(['/login'])  
  }
}
