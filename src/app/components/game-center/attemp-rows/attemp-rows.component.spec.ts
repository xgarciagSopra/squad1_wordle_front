import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttempRowsComponent } from './attemp-rows.component';

describe('AttempRowsComponent', () => {
  let component: AttempRowsComponent;
  let fixture: ComponentFixture<AttempRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttempRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttempRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
