import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { FormComponent } from './views/pages/form/form.component';
import { ListComponent } from './views/pages/list/list.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'form',
      component: FormComponent
  },
  {
      path: 'list',
      component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
