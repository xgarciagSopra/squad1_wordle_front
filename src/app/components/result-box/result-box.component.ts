import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {
  @Input() word = ''
  @Input() splitWord: string[] = [];
  @Input() borderResultStyles!: boolean;
  @Input() firstRound = false;

  borderStyles(): string{
    if (!this.firstRound) return '';
    return this.borderResultStyles
      ? 'border-success'
      : 'border-danger';
  }
}
