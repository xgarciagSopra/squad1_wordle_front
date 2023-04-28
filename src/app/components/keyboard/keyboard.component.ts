import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from 'src/app/interfaces/letter-status.interface';
import {
  firstKeyBoardRow,
  secondKeyBoardRow,
  thirdKeyBoardRow,
  sendKey,
} from 'src/app/interfaces/keyboardRows';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {
  @Output() pressedKeyValue = new EventEmitter<Letter>();
  @Input() disableKeys = false;
  @Input() roundFound = false;
  @Input() correctSyntaxWord = false;
  @Input() keyBoxStyle = '';
  @Input() positionOfWordList!: Letter[];

  firstKeyBoardRow = firstKeyBoardRow;
  secondKeyBoardRow = secondKeyBoardRow;
  thirdKeyBoardRow = thirdKeyBoardRow;
  sendKey = sendKey;

  pressKeyValue(letter: Letter) {
    this.pressedKeyValue.emit(letter);
  }

  newBoxStyles(key: Letter) {
    return {
      hit: key.hitStatus === 'HIT',
      partialHit: key.hitStatus === 'PARTIAL_HIT',
      fail: key.hitStatus === 'FAIL',
    };
  }
}
