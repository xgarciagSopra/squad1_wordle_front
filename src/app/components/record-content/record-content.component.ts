import { Component } from '@angular/core';
import { GuessWordService } from 'src/app/services/guess-word.service';

@Component({
  selector: 'app-record-content',
  templateUrl: './record-content.component.html',
  styleUrls: ['./record-content.component.scss']
})
export class RecordContentComponent {
    public rounds: Array<any> = [];
    
    constructor(private guessService: GuessWordService){}

    ngOnInit(): void{
      this.guessService.getRecord().subscribe({
        next: (response: any) => {
          this.rounds = response;
        }
      })
    }
}
