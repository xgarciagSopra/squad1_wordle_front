import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
  @Output() writeInResultBox = new EventEmitter<string>();

  word: string = '';
  firstKeyBoardRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  secondKeyBoardRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  thirdKeyBoardRow = ['⌫', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '➜'];

  writeResultBox(letter: string) {
    this.pressKeyValue(letter);
  }

  deleteLetter() {}

  sendWord(word: string) {}

  pressKeyValue(letter: string) {
    if (letter === '⌫') {
      this.deleteLetter();
    } else if (letter === '➜') {
      this.sendWord(this.word);
    } else {
      this.word += letter;
      this.writeInResultBox.emit(this.word);
    }
  }
}
