import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {
  @Input() word = ''
  @Input() splitWord: String[] = [];
  @Input() borderResultStyles!: boolean;

  borderStyles(): String{
    if (this.borderResultStyles === undefined) return '';
    return this.borderResultStyles
      ? 'border-success'
      : 'border-danger';
  }
}
