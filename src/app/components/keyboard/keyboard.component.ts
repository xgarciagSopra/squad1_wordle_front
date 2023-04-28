import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LetterStatus } from 'src/app/interfaces/letter-status.interface';

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
  @Input() keyBoxStyle = '';
  @Input() positionOfWordList!: LetterStatus[];

  firstKeyBoardRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  secondKeyBoardRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  thirdKeyBoardRow = ['⌫', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  sendKey = '➜';

  pressKeyValue(letter: string) {
    this.pressedKeyValue.emit(letter);
  }

  newBoxStyles(key: string) {
    return {
      'hit colorWhite': this.keyBoxStyle === 'hit',
      'partialHit colorWhite': this.keyBoxStyle === 'partialHit',
      'fail colorWhite': this.keyBoxStyle === 'fail',
    };
  }
}
