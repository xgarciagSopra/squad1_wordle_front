import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorRoundDialogComponent } from '../error-round-dialog/error-round-dialog.component';
import { GuessWordService } from 'src/app/services/guess-word.service';
import { Letter } from 'src/app/interfaces/letter-status.interface';
import {
  firstKeyBoardRow,
  secondKeyBoardRow,
  thirdKeyBoardRow,
  sendKey,
} from 'src/app/interfaces/keyboardRows';
import { WinRoundDialogComponent } from '../win-round-dialog/win-round-dialog.component';

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

  firstKeyBoardRow = firstKeyBoardRow;
  secondKeyBoardRow = secondKeyBoardRow;
  thirdKeyBoardRow = thirdKeyBoardRow;
  sendKey = sendKey;

  ngOnInit() {
    this.guessWord.newRound().subscribe({
      next: (response: any) => {
        if (response?.id) {
          this.roundFound = true;
          this.idRound = response.id;
        }
      },
      error: () => {
        this.openErrorDialog();
      },
    });
    this.fillSplitWord();
  }

  idRound!: number;
  word = '';
  splittedWord: Letter[] = [];
  found!: boolean;
  firstRound = false;
  roundFound = false;
  selectResultBox!: number;
  correctSyntaxWord = this.isSyntaxCorrect();
  nextRound = false;

  writeWord(letter: Letter) {
    this.letterPressed(letter);
  }

  dangerToast() {
    this.toastr.warning('Palabra no encontrada');
  }

  deleteLetter() {
    if (this.selectResultBox) {
      this.splittedWord[this.selectResultBox - 1].letter = ' ';
      this.rewriteWord();
      return;
    }
    this.word = this.word.substring(0, this.word.length - 1);
    this.fillSplitWord();
  }

  isMaxLengthWord(): boolean {
    return this.word.length === 5;
  }

  writeInSelectedBox(letter: Letter) {
    this.splittedWord[this.selectResultBox - 1].letter = letter.letter;
  }

  rewriteWord() {
    this.word = '';
    this.splittedWord.forEach((letter) => {
      this.word += letter.letter;
    });
  }

  isSyntaxCorrect(): boolean {
    return this.splittedWord.some((key: Letter) => key.letter === ' ');
  }

  letterPressed(key: Letter) {
    const deleteKey = '⌫';
    const sendKey = '➜';
    if (key.letter === deleteKey) {
      this.deleteLetter();
      return;
    }
    if (key.letter === sendKey) {
      this.found = false;
      this.firstRound = true;
      this.sendWord(this.word);
      return;
    }
    if (this.selectResultBox) {
      this.writeInSelectedBox(key);
      this.rewriteWord();
      this.correctSyntaxWord = this.isSyntaxCorrect();
      return;
    }
    if (this.word.length < 5) {
      this.word += key.letter;
      this.fillSplitWord();
    }
  }

  sendWord(word: string) {
    return this.guessWord.checkWord(word, this.idRound).subscribe({
      next: (response: any) => {
        this.nextRound = !!response.roundWin;
        this.found = !!response.wordExists;
        if (!this.found) {
          this.dangerToast();
          return;
        }
        this.splittedWord = response.positionOfWordResponseList;
        this.resetStatusKeyboard();
        if (this.nextRound) {
          console.log(this.nextRound);
          this.openWinDialog();
          return;
        }
      },
      error: () => {
        this.dangerToast();
        this.found = false;
      },
    });
  }

  openErrorDialog() {
    this.dialog.open(ErrorRoundDialogComponent, {
      panelClass: 'custom-dialog-container',
    });
  }

  openWinDialog() {
    this.dialog.open(WinRoundDialogComponent, {
      panelClass: 'custom-dialog-container',
    });
  }

  fillSplitWord() {
    let fillArray: Letter[] = [];

    for (let letter = 0; letter < 5; letter++) {
      fillArray[letter] = {
        letter: this.word.charAt(letter) ?? ' ',
        hitStatus: 'DEFAULT',
      };
    }

    this.splittedWord = fillArray;
  }

  selectedResultBox(id: number) {
    this.selectResultBox = id;
  }

  resetStatusKeyboard() {
    for (let letter = 0; letter < this.splittedWord.length; letter++) {
      if (this.rowIncludesLetter(this.splittedWord[letter], firstKeyBoardRow)) {
        this.changeDataRow(letter, firstKeyBoardRow);
      }
      if (
        this.rowIncludesLetter(this.splittedWord[letter], secondKeyBoardRow)
      ) {
        this.changeDataRow(letter, secondKeyBoardRow);
      }
      if (this.rowIncludesLetter(this.splittedWord[letter], thirdKeyBoardRow)) {
        this.changeDataRow(letter, thirdKeyBoardRow);
      }
    }
  }

  changeDataRow(indexLetter: number, row: Letter[]) {
    let index = row.findIndex(
      (object) => object.letter === this.splittedWord[indexLetter].letter
    );
    row[index].hitStatus = this.splittedWord[indexLetter].hitStatus;
  }

  rowIncludesLetter(letter: Letter, array: Letter[]) {
    return array.some((object: Letter) => object.letter === letter.letter);
  }
}
