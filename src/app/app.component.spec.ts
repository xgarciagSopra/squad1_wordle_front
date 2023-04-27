import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameCenterComponent } from './components/game-center/game-center.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        GameCenterComponent,
        FooterComponent,
      ],
      providers: [MatDialog],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'squad1_wordle'`, () => {
    expect(appComponent.title).toEqual('squad1_wordle');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'squad1_wordle app is running!'
    );
  });
});
