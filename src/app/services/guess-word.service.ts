import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckedWordResponse } from '../interfaces/checkedWord.interface';
import { host, port } from '../interfaces/variables';
import { UserService } from './user/user.service';


@Injectable({
  providedIn: 'root',
})
export class GuessWordService {
  constructor(private http: HttpClient, private userService: UserService) {}

  baseURL = 'http://' + host + ':' + port;

  checkWord(word: string, idRound: number): Observable<CheckedWordResponse> {
    return this.http.get<CheckedWordResponse>(
      this.baseURL + '/rounds/' + idRound + '/check-word?word=' + word
    );
  }

  newRound() {
    return this.http.post<number>(this.baseURL + '/rounds',{});
  }

  getRecord(): Observable<any>{
    return this.http.get<any>(this.baseURL + '/rounds')
  } 
}
