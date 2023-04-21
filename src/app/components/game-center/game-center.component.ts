import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GuessWordService } from 'src/app/services/guess-word.service';


@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent {
  word = '';
  encontrado = false;
  constructor(
    private guessWord: GuessWordService,
    private toastr: ToastrService
  ) {}

  writeWord(letter: string) {
    this.letterPressed(letter);
  }

  dangerToast(){
    this.toastr.warning('Palabra no encontrada');
  }

  notSearch() {
    this.encontrado = false;
  }

  deleteLetter() {
    // TODO (Xavi): deleteLetter in the resultbox
  }

  isMaxLengthWord(): boolean {
    return this.word.length === 5;
  }

  letterPressed(letter: string) {
    const deleteKey = '⌫';
    const sendKey = '➜';
    if (letter === deleteKey) {
      this.deleteLetter();
      return;
    }
    if (letter === sendKey) {
      this.notSearch();
      this.sendWord(this.word);
      return;
    }
    if (this.word.length < 5) this.word += letter;
  }

  sendWord(word: string) {
    return this.guessWord.checkWord(word).subscribe({
      next: (response: any) => {
        if (response.wordExists) return;
        this.dangerToast();
      },
      error: (error) => {
        this.dangerToast();
      },
    });
  }
}
