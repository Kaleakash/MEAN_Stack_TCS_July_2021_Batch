import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfExamComponent } from './mdf-exam.component';

describe('MdfExamComponent', () => {
  let component: MdfExamComponent;
  let fixture: ComponentFixture<MdfExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
