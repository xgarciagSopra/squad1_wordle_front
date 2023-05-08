import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckedWordResponse } from '../interfaces/checkedWord.interface';
import { host, port } from '../interfaces/variables';

@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://' + host + ':' + port;

  checkWord(word: string, idRound: number): Observable<CheckedWordResponse> {
    return this.http.get<CheckedWordResponse>(
      this.baseURL + '/rounds/' + idRound + '/check-word?word=' + word
    );
  }

  newRound() {
    return this.http.post<number>(this.baseURL + '/rounds', {});
  }
}
