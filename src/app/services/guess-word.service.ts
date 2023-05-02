import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckedWordResponse } from '../interfaces/checkedWord.interface';

@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://10.102.30.227:8080';

  checkWord(word: string, idRound: number): Observable<CheckedWordResponse> {
    return this.http.get<CheckedWordResponse>(
      this.baseURL + '/rounds/' + idRound + '/check-word?word=' + word
    );
  }

  newRound() {
    return this.http.post<number>(this.baseURL + '/rounds', {});
  }
}
