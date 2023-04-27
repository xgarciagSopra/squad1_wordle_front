import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() selectResultBox = new EventEmitter<number>();

  selectedResultBox(boxIndex: number) {
    this.selectResultBox.emit(boxIndex);
  }

  newBoxStyles(letter: string, index: number) {
    return {
      'hit colorWhite': this.keyBoxStyle === 'hit',
      'parcialHit colorWhite': this.keyBoxStyle === 'parcialHit',
      'fail colorWhite': this.keyBoxStyle === 'fail',
      'border-primary': this.selectedBox === index,
    };
  }
}
