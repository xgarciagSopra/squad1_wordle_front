import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LetterStatus } from 'src/app/interfaces/letter-status.interface';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {
  @Input() word = '';
  @Input() splitWord: string[] = [];
  @Input() borderResultStyles!: boolean;
  @Input() keyBoxStyle = '';
  @Input() firstRound = false;
  @Input() selectedBox!: number;
  @Input() positionOfWordList: any[] = [];
  @Output() selectResultBox = new EventEmitter<number>();

  selectedResultBox(boxIndex: number) {
    this.selectResultBox.emit(boxIndex);
  }

  newBoxStyles(letter: string, index: number) {
    let indexLetter = this.positionOfWordList.indexOf(
      (object: LetterStatus) => object.letter === letter
    );
    return {
      'hit colorWhite':
        this.positionOfWordList[indexLetter].hitStatus === 'hit',
      'partialHit colorWhite':
        this.positionOfWordList[indexLetter].hitStatus === 'partialHit',
      'fail colorWhite':
        this.positionOfWordList[indexLetter].hitStatus === 'fail',
      'border-primary': this.selectedBox === index,
    };
  }
}
