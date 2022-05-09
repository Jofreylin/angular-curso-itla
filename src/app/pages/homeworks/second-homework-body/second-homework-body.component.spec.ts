import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHomeworkBodyComponent } from './second-homework-body.component';

describe('SecondHomeworkBodyComponent', () => {
  let component: SecondHomeworkBodyComponent;
  let fixture: ComponentFixture<SecondHomeworkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondHomeworkBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHomeworkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
