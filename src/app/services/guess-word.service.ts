import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://127.0.0.1:8080';

  checkWord(word: string): Observable<boolean> {
    return this.http.get<boolean>(this.baseURL + '/words/exist?word=' + word);
  }
}
