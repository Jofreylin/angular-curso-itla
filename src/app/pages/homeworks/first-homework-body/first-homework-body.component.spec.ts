import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHomeworkBodyComponent } from './first-homework-body.component';

describe('FirstHomeworkBodyComponent', () => {
  let component: FirstHomeworkBodyComponent;
  let fixture: ComponentFixture<FirstHomeworkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstHomeworkBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHomeworkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
