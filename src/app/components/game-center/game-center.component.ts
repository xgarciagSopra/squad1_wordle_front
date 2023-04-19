import { Component } from '@angular/core';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss']
})
export class GameCenterComponent {

  word = '';

  writeWord(letter: string){
    this.letterPressed(letter)
  }

  deleteLetter(){
    // TODO (Xavi): deleteLetter in the resultbox
  }

  letterPressed(letter: string){
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

  sendWord(word: string){
    // TODO (Xavi): add integration with server
  }

}
