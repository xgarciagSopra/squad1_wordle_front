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
  @Input() keyBoxStyle: string = 'fail';
  @Input() firstRound = false;
  @Input() selectedBox!: number;
  @Output() selectResultBox = new EventEmitter<number>();

  boxStyles(): string {
    if (!this.firstRound) return '';
    return this.borderResultStyles ? 'hit' : 'parcialHit';
  }
 
  borderStyles(): string {
    console.log('pruebas');
    if (!this.firstRound) return '';
    return this.borderResultStyles ? 'border-success' : 'border-danger';
  }

  selectedResultBox(boxIndex: number) {
    this.selectResultBox.emit(boxIndex);
  }

  newBoxStyles(letter: string, index: number) {
    if (!this.firstRound) return '';
    return {
      'hit': this.keyBoxStyle === 'hit',
      'parcialHit': this.keyBoxStyle === 'parcialHit',
      'fail': this.keyBoxStyle === 'fail',
      'border-primary': this.keyBoxStyle
    };
  }

}
