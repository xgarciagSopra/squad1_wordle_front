import { TestBed } from '@angular/core/testing';

import { GuessWordService } from './guess-word.service';
import { HttpClientModule } from '@angular/common/http';

describe('GuessWordService', () => {
  let service: GuessWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GuessWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
