import { Component } from '@angular/core';
import { Record } from 'src/app/interfaces/record';
import { GuessWordService } from 'src/app/services/guess-word.service';

@Component({
  selector: 'app-record-content',
  templateUrl: './record-content.component.html',
  styleUrls: ['./record-content.component.scss']
})
export class RecordContentComponent {
    public rounds: Array<Record> = [];
    
    constructor(private guessService: GuessWordService){}

    ngOnInit(): void{
      this.guessService.getRecord().subscribe({
        next: (response: Record[]) => {
          this.rounds = response;
        }
      })
    }
}
