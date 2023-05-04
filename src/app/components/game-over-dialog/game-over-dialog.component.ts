import { Component } from '@angular/core';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss'],
})
export class GameOverDialogComponent {
  secretWord = '';

  reloadWindow() {
    window.location.reload();
  }
}
