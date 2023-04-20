import { Component } from '@angular/core';
import { GuessWordService } from 'src/app/services/guess-word.service';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent {
  word = '';
  constructor(private guessWord: GuessWordService) {}

  writeWord(letter: string) {
    this.letterPressed(letter);
  }

  deleteLetter() {
    // TODO (Xavi): deleteLetter in the resultbox
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
    this.word += letter;
  }

  sendWord(word: string) {
    return this.guessWord.checkWord(word)
      ? alert('si que esta')
      : alert('no esta');
  }
}
