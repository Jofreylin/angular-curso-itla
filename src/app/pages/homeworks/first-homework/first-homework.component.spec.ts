import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHomeworkComponent } from './first-homework.component';

describe('FirstHomeworkComponent', () => {
  let component: FirstHomeworkComponent;
  let fixture: ComponentFixture<FirstHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
