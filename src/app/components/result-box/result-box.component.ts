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
  @Input() positionOfWordList!: LetterStatus[];
  @Output() selectResultBox = new EventEmitter<number>();

  selectedResultBox(boxIndex: number) {
    this.selectResultBox.emit(boxIndex);
  }

  newBoxStyles(letter: string, index: number) {
    let indexLetter = this.positionOfWordList.findIndex(
      (letterStatus: LetterStatus) => letterStatus.letter === letter
    );
    console.log(indexLetter);
    return {
      'hit colorWhite':
        this.positionOfWordList[indexLetter].hitStatus === 'HIT',
      'partialHit colorWhite':
        this.positionOfWordList[indexLetter].hitStatus === 'PARTIAL_HIT',
      'fail colorWhite':
        this.positionOfWordList[indexLetter].hitStatus === 'FAIL',
      'border-primary': this.selectedBox === index,
    };
  }
}
