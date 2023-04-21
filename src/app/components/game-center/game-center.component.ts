import { Component } from '@angular/core';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent {
  word = '';
  lenghtWord = this.word.length < 5;

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
        if (this.word.length < 5) this.word += letter;
        this.lenghtWord = this.word.length < 5;
        break;
      }
    }
  }

  sendWord(word: string) {
    // TODO (Xavi): add integration with server
  }
}
