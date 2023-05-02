import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Letter } from 'src/app/interfaces/letter-status.interface';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {
  @Input() word = '';
  @Input() splitWord: Letter[] = [];
  @Input() borderResultStyles!: boolean;
  @Input() keyBoxStyle = '';
  @Input() firstRound = false;
  @Input() selectedBox!: number;
  @Output() selectResultBox = new EventEmitter<number>();

  selectedResultBox(boxIndex: number) {
    this.selectResultBox.emit(boxIndex);
  }

  newBoxStyles(letter: Letter, index: number) {
    return {
      hit: letter.hitStatus === 'HIT',
      partialHit: letter.hitStatus === 'PARTIAL_HIT',
      fail: letter.hitStatus === 'FAIL',
      'border-primary': this.selectedBox === index,
    };
  }
}
