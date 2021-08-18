import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfExamComponent } from './tdf-exam.component';

describe('TdfExamComponent', () => {
  let component: TdfExamComponent;
  let fixture: ComponentFixture<TdfExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
