import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
  @Output() pressedKeyValue = new EventEmitter<string>();
  @Input() disableKeys = false;
  @Input() roundFound = false;
  @Input() correctSyntaxWord = false;

  firstKeyBoardRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  secondKeyBoardRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  thirdKeyBoardRow = ['⌫', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  sendKey = '➜';

  pressKeyValue(letter: string) {
    this.pressedKeyValue.emit(letter);
  }
}
