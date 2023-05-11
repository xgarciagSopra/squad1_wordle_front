import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCenterComponent } from './game-center.component';
import { MatDialog } from '@angular/material/dialog';
import { GuessWordService } from 'src/app/services/guess-word.service';
import { ToastrService } from 'ngx-toastr';
import { ResultBoxComponent } from './result-box/result-box.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

const guessWordService = jasmine.createSpyObj('GuessWordService', [
  'newRound',
  'checkWord',
]);

const toastrService = jasmine.createSpyObj('ToastrService', ['warning']);

describe('GameCenterComponent', () => {
  let component: GameCenterComponent;
  let fixture: ComponentFixture<GameCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameCenterComponent,
        ResultBoxComponent,
        KeyboardComponent,
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: GuessWordService, useValue: guessWordService },
        { provide: ToastrService, useValue: toastrService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
