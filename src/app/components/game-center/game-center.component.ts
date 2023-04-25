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
    this.openDialog();
  }

  word = '';
  found: boolean = false;

  writeWord(letter: string) {
    this.letterPressed(letter);
  }

  dangerToast() {
    this.toastr.warning('Palabra no encontrada');
  }

  

  deleteLetter() {
    this.word = this.word.substring(0, this.word.length - 1);
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
      this.sendWord(this.word);
      return;
    }
    if (this.word.length < 5) this.word += letter;
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

  fillSplitWord(): String[] {
    let fillArray: String[] = [];
    for (
      let letterWordIndex = 0;
      letterWordIndex < this.word.length;
      letterWordIndex++
    ) {
      fillArray.push(this.word.charAt(letterWordIndex));
    }
    while (fillArray.length < 5) {
      fillArray.push('');
    }
    return fillArray;
  }
}
