import { TestBed } from '@angular/core/testing';

import { GuessWordService } from './guess-word.service';

describe('GuessWordService', () => {
  let service: GuessWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuessWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
