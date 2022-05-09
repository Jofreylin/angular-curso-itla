import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { FirstHomeworkBodyComponent } from './first-homework-body/first-homework-body.component';
import { FirstHomeworkComponent } from './first-homework/first-homework.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SecondHomeworkComponent } from './second-homework/second-homework.component';
import { SecondHomeworkBodyComponent } from './second-homework-body/second-homework-body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirstHomeworkBodyComponent, FirstHomeworkComponent, SecondHomeworkComponent, SecondHomeworkBodyComponent],
  imports: [
    CommonModule,
    HomeworksRoutingModule,
    HighlightModule,
    FormsModule
  ]
})
export class HomeworksModule { }
