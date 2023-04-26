import { ToastrService } from 'ngx-toastr';
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
  constructor(
    private dialog: MatDialog,
    private guessWord: GuessWordService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.guessWord.newRound().subscribe({
      next: (response: any) => {
        if (response?.id) {
          console.log(response.id);
        }
      },
      error: (error) => {
        this.openDialog();
      },
    });
    this.fillSplitWord();
  }

  word = '';
  splittedWord: String[] = [];
  found!: boolean;
  firstRound = false;

  writeWord(letter: string) {
    this.letterPressed(letter);
  }

  dangerToast() {
    this.toastr.warning('Palabra no encontrada');
  }

  deleteLetter() {
    this.word = this.word.substring(0, this.word.length - 1);
    this.fillSplitWord();
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
      this.found = false;
      this.firstRound = true;
      this.sendWord(this.word);
      return;
    }
    if (this.word.length < 5){
      this.word += letter;
      this.fillSplitWord();
    }
  }

  sendWord(word: string) {
    return this.guessWord.checkWord(word).subscribe({
      next: (response: any) => {
        this.found = !!response.wordExists;
        if (!this.found) {
          this.dangerToast();
        }
      },
      error: (error) => {
        this.dangerToast();
        this.found = false;
      },
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ErrorRoundDialogComponent, {
      panelClass: 'custom-dialog-container',
    });
  }

  fillSplitWord() {
    let fillArray: String[] = [];
    fillArray = this.word.split('');

    if (fillArray.length < 5) {
      fillArray.push(...new Array(5 - fillArray.length).fill(''));
    }

    this.splittedWord = fillArray; 

  }

}
