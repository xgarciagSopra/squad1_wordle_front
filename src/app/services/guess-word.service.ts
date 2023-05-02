import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckedWord } from '../interfaces/checkedWord.interface';

@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://10.102.30.227:8080';

  checkWord(word: string, idRound: number): Observable<CheckedWord> {
    return this.http.get<CheckedWord>(
      this.baseURL + '/rounds/' + idRound + '/check-word?word=' + word
    );
  }

  newRound() {
    return this.http.post<number>(this.baseURL + '/rounds', {});
  }
}
