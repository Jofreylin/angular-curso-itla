import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstHomeworkComponent } from './first-homework/first-homework.component';
import { SecondHomeworkComponent } from './second-homework/second-homework.component';

const routes: Routes = [
  {
    path: 'first-homework',
    component: FirstHomeworkComponent
  },
  {
    path: 'second-homework',
    component: SecondHomeworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
