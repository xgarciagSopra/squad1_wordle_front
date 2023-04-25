import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {
  @Input() word = '';
  @Input() borderResultStyles = false;

  borderStyles(): String{
    return this.borderResultStyles
      ? 'border border-success border-3'
      : 'border border-danger border-3';
  }
}
