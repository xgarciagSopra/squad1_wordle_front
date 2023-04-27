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
  @Input() firstRound = false;
  @Input() selectedBox!: number;
  @Output() selectResultBox = new EventEmitter<number>();

  borderStyles(): string {
    if (!this.firstRound) return '';
    return this.borderResultStyles ? 'border-success' : 'border-danger';
  }

  selectedResultBox(boxIndex: number) {
    this.selectResultBox.emit(boxIndex);
  }
}
