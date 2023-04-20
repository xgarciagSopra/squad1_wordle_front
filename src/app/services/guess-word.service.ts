import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient) {}

  baseURL = '';

  checkWord(word: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL, word);
  }
}
