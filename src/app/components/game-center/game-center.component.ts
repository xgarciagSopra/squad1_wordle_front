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
import { Attempt } from 'src/app/interfaces/attempt.interface';

const deleteKey = '⌫';
const sendKeySimbol = '➜';
const MaxResultBox = 5;
const MinResultBox = 1;
const default_value = 'DEFAULT';
const hit = 'HIT';
const partialHit = 'PARTIAL_HIT';
const fail = 'FAIL';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent implements OnInit {
  firstKeyBoardRow = firstKeyBoardRow;
  secondKeyBoardRow = secondKeyBoardRow;
  thirdKeyBoardRow = thirdKeyBoardRow;
  sendKeyRow = sendKey;
  idRound!: number;
  word = '';
  splittedWord: Letter[] = [];
  found!: boolean;
  firstRound = false;
  roundFound = false;
  selectResultBox!: number;
  correctSyntaxWord = this.isSyntaxCorrect();
  isWin = false;
  resultBoxRow: Attempt[] = [];
  round = 0;

  constructor(
    private dialog: MatDialog,
    private guessWord: GuessWordService,
    private toastr: ToastrService
  ) {}

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
      this.selectResultBox =
        this.selectResultBox === MinResultBox
          ? MinResultBox
          : --this.selectResultBox;
      return;
    }
    this.word = this.word.substring(0, this.word.length - 1);
    this.fillSplitWord();
  }

  nextIntent() {
    if (this.isWin) {
      return;
    }
    if (this.resultBoxRow.length < 4) {
      let intent = { round: this.round, letters: this.splittedWord };
      this.resultBoxRow.push(intent);
      this.word = '';
      this.fillSplitWord();
      this.round++;
    }
  }

  isMaxLengthWord(): boolean {
    return this.word.length === 5;
  }

  writeInSelectedBox(key: Letter) {
    this.splittedWord[this.selectResultBox - 1].letter = key.letter;
  }

  rewriteWord() {
    let separacion = this.splittedWord.map((key) => key.letter);
    this.word = separacion.join('');
  }

  isSyntaxCorrect(): boolean {
    return this.splittedWord.some(
      (key: Letter) => key.letter === ' ' || key.letter === ''
    );
  }

  letterPressed(key: Letter) {
    if (key.letter === deleteKey) {
      this.deleteLetter();
      this.correctSyntaxWord = this.isSyntaxCorrect();
      return;
    }
    if (key.letter === sendKeySimbol) {
      this.found = false;
      this.firstRound = true;
      this.sendWord(this.word);
      return;
    }
    if (this.selectResultBox) {
      this.writeInSelectedBox(key);
      this.rewriteWord();
      this.correctSyntaxWord = this.isSyntaxCorrect();
      this.selectResultBox =
        this.selectResultBox === MaxResultBox
          ? MaxResultBox
          : ++this.selectResultBox;
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
        this.isWin = !!response.roundWin;
        this.found = !!response.wordExists;
        if (!this.found) {
          this.dangerToast();
          return;
        }
        this.splittedWord = response.positionOfWordResponseList;
        this.resetStatusKeyboard();
        this.nextIntent();
        if (this.isWin) {
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
        hitStatus: default_value,
      };
    }

    this.splittedWord = fillArray;
  }

  selectedResultBox(id: number) {
    this.selectResultBox = id;
  }

  resetStatusKeyboard() {
    this.splittedWord.forEach((letter, index) => {
      if (this.rowIncludesLetter(this.splittedWord[index], firstKeyBoardRow)) {
        this.changeDataRow(index, firstKeyBoardRow);
        return;
      }
      if (this.rowIncludesLetter(this.splittedWord[index], secondKeyBoardRow)) {
        this.changeDataRow(index, secondKeyBoardRow);
        return;
      }
      if (this.rowIncludesLetter(this.splittedWord[index], thirdKeyBoardRow)) {
        this.changeDataRow(index, thirdKeyBoardRow);
        return;
      }
    });
  }

  changeDataRow(indexLetter: number, row: Letter[]) {
    let index = row.findIndex(
      (object) => object.letter === this.splittedWord[indexLetter].letter
    );
    if (row[index].hitStatus === hit) {
      return;
    }
    if (
      row[index].hitStatus === partialHit &&
      this.splittedWord[indexLetter].hitStatus !== fail
    ) {
      row[index].hitStatus = this.splittedWord[indexLetter].hitStatus;
      return;
    }
    row[index].hitStatus = this.splittedWord[indexLetter].hitStatus;
  }

  rowIncludesLetter(letter: Letter, array: Letter[]) {
    return array.some((object: Letter) => object.letter === letter.letter);
  }
}
