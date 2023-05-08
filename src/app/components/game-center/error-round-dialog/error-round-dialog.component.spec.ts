import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRoundDialogComponent } from './error-round-dialog.component';

describe('ErrorRoundDialogComponent', () => {
  let component: ErrorRoundDialogComponent;
  let fixture: ComponentFixture<ErrorRoundDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorRoundDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorRoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
