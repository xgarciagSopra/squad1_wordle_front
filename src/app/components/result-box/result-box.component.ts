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
  @Input() keyBoxStyle: string = '';
  @Input() firstRound = false;

  boxStyles(): string{
    if (!this.firstRound) return '';
    return this.borderResultStyles
      ? 'hit'
      : 'parcialHit';
  }

  newBoxStyles(): string{
    switch(this.keyBoxStyle){
      case (''):
        return this.keyBoxStyle;
      case ('hit'):
        return this.keyBoxStyle;
      case ('parcialHit'):
        return this.keyBoxStyle;  
      case ('fail'):
        return this.keyBoxStyle;  
      default:
        return '';
    }
  }
}
