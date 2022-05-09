import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworksLayoutComponent } from './layouts/homeworks-layout/homeworks-layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeworksLayoutComponent,
    children: [
      {
        path: 'homework',
        loadChildren: () => import('./pages/homeworks/homeworks.module').then(mod=>mod.HomeworksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
