import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from 'src/app/interfaces/letter-status.interface';

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
  @Input() nextRound!: boolean;
  @Input() firstKeyboardRow!: Letter[];
  @Input() secondKeyboardRow!: Letter[];
  @Input() thirdKeyboardRow!: Letter[];
  @Input() sendKey!: Letter;

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
