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

  deleteLetter(){}

  letterPressed(letter: string){
    let deleteKey = letter === '⌫';
    let sendKey = letter === '➜';
    if (deleteKey) {
      this.deleteLetter();
    } else if (sendKey) {
      this.sendWord(this.word);
    } else {
      this.word += letter;
    }
  }

  sendWord(word: string){}

}
