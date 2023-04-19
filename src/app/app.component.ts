import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  word: string = '';
  title = 'squad1_wordle';

  writeWord(word: string) {
    this.word = word;
  }
}
