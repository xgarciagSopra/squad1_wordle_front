import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorRoundDialogComponent } from '../error-round-dialog/error-round-dialog.component';
import { GuessWordService } from 'src/app/services/guess-word.service';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent implements OnInit {

  constructor(private dialog: MatDialog, private guessWord: GuessWordService) {}
  ngOnInit(){
    this.openDialog();
  }

  word = '';


  writeWord(letter: string) {
    this.letterPressed(letter);
  }

  deleteLetter() {
    this.word = this.word.substring(0,this.word.length - 1);
  }

  isMaxLengthWord(): boolean {
    return this.word.length === 5;
  }

  letterPressed(letter: string) {
    const deleteKey = '⌫';
    const sendKey = '➜';
    if (letter === deleteKey) {
      this.deleteLetter();
      return;
    }
    if (letter === sendKey) {
      this.sendWord(this.word);
      return;
    }
    if (this.word.length < 5) this.word += letter;
  }

  sendWord(word: string) {
    return this.guessWord.checkWord(word).subscribe({
      next: (response: any) => {
        if (response.wordExists) return;
        console.log(response.wordExists);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  openDialog(){
     const dialogRef = this.dialog.open(ErrorRoundDialogComponent, {
       panelClass: 'custom-dialog-container',
     });
  }
  
}
