import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
          this.roundFound = true;
          console.log(response.id);
          this.idRound = response.id;
        }
      },
      error: () => {
        this.openDialog();
      },
    });
    this.fillSplitWord();
  }

  idRound!: number;
  word = '';
  splittedWord: string[] = [];
  found!: boolean;
  firstRound = false;
  roundFound = false;
  selectResultBox!: number;
  correctSyntaxWord = this.isSyntaxCorrect();
  positionOfWordList: any[] = [];

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

  writeInSelectedBox(letter: string) {
    this.splittedWord[this.selectResultBox - 1] = letter;
  }

  rewriteWord() {
    this.word = '';
    this.splittedWord.forEach((letter) => {
      this.word += letter;
    });
  }

  isSyntaxCorrect(): boolean {
    return this.splittedWord.includes(' ');
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
    if (this.selectResultBox) {
      this.writeInSelectedBox(letter);
      this.rewriteWord();
      this.correctSyntaxWord = this.isSyntaxCorrect();
      return;
    }
    if (this.word.length < 5) {
      this.word += letter;
      this.fillSplitWord();
    }
  }

  sendWord(word: string) {
    return this.guessWord.checkWord(word, this.idRound).subscribe({
      next: (response: any) => {
        this.found = !!response.wordExists;
        this.positionOfWordList = response.positionOfWordResponseList;
        console.log(this.positionOfWordList);
        if (!this.found) {
          this.dangerToast();
        }
      },
      error: () => {
        this.dangerToast();
        this.found = false;
      },
    });
  }

  openDialog() {
    this.dialog.open(ErrorRoundDialogComponent, {
      panelClass: 'custom-dialog-container',
    });
  }

  fillSplitWord() {
    let fillArray: string[] = [];
    fillArray = this.word.split('');

    if (fillArray.length < 5) {
      fillArray.push(...new Array(5 - fillArray.length).fill(' '));
    }

    this.splittedWord = fillArray;
  }

  selectedResultBox(id: number) {
    this.selectResultBox = id;
  }
}
