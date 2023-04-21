import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorRoundDialogComponent } from '../error-round-dialog/error-round-dialog.component';



@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  ngOnInit(){
    this.openDialog();
  }

  word = '';

  writeWord(letter: string) {
    this.letterPressed(letter);
  }

  deleteLetter() {
    // TODO (Xavi): deleteLetter in the resultbox
  }

  letterPressed(letter: string) {
    const deleteKey = '⌫';
    const sendKey = '➜';
    switch (letter) {
      case deleteKey: {
        this.deleteLetter();
        break;
      }
      case sendKey: {
        this.sendWord(this.word);
        break;
      }
      default: {
        this.word += letter;
        break;
      }
    }
  }

  sendWord(word: string) {
    // TODO (Xavi): add integration with server
  }

  openDialog(){
     const dialogRef = this.dialog.open(ErrorRoundDialogComponent, {
       panelClass: 'custom-dialog-container',
     });
  }
}
