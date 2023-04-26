import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://10.102.30.94:8080';

  checkWord(word: string, idRound: number): Observable<boolean> {
    return this.http.get<boolean>(
      this.baseURL + '/rounds/' + idRound + '/check-word?word=' + word
    );
  }

  newRound() {
    return this.http.post<number>(this.baseURL + '/rounds', {});
  }
}
