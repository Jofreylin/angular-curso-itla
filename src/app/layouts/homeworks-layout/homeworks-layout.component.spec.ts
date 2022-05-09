import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworksLayoutComponent } from './homeworks-layout.component';

describe('HomeworksLayoutComponent', () => {
  let component: HomeworksLayoutComponent;
  let fixture: ComponentFixture<HomeworksLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworksLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
