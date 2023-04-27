import { TestBed } from '@angular/core/testing';

import { GuessWordService } from './guess-word.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GuessWordService', () => {
  let service: GuessWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(GuessWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
