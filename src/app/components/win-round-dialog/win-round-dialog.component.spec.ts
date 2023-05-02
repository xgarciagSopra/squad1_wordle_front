import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinRoundDialogComponent } from './win-round-dialog.component';

describe('WinRoundDialogComponent', () => {
  let component: WinRoundDialogComponent;
  let fixture: ComponentFixture<WinRoundDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinRoundDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinRoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
