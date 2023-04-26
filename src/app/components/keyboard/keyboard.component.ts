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

  firstKeyBoardRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  secondKeyBoardRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  thirdKeyBoardRow = ['⌫', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '➜'];

  disableSendKey(key: string): boolean {
    return (key === '➜' && !this.disableKeys);
  }

  disableAllKeys(): boolean{
    return (this.roundFound === false)
  }

  comproveAllKeysToDisable(key: string){
    return (this.disableAllKeys() || this.disableSendKey(key))
  }

  keyAllStyles(key: string){
    return (this.roundFound === false)?'keyDisabled':'key';
  }


  keyStyles(key: string) {
    return key === '➜' && !this.disableKeys ? 'keyDisabled' : 'key';
  }

  pressKeyValue(letter: string) {
    this.pressedKeyValue.emit(letter);
  }
}
