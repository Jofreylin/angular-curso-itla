import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHomeworkComponent } from './second-homework.component';

describe('SecondHomeworkComponent', () => {
  let component: SecondHomeworkComponent;
  let fixture: ComponentFixture<SecondHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
