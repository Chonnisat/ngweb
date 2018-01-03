import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { PubliczoneComponent } from './pages/publiczone/publiczone.component';
import { PrivatezoneComponent } from './pages/privatezone/privatezone.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { Db1Component } from './pages/db1/db1.component';
import { Db2Component } from './pages/db2/db2.component';

const routes: Routes = [
  {
    path : '',
    component : PubliczoneComponent,
    children : [{
        path : '',
        component : HomeComponent
      }, {
        path : 'home',
        component : HomeComponent
      }, {
        path : 'test',
        component : TestComponent
      }, {
        path : 'testparam/:id',
        component : TestComponent
      }, {
        path : 'login',
        component : LoginComponent
      }, {
        path : 'db1',
        component : Db1Component
      }, {
        path : 'db2',
        component : Db2Component
      }]
  }, {
    path : 'admin',
    component : PubliczoneComponent,
    canActivate : [AdminGuard],
    children : [{
        path : '',
        component : StudentComponent
      }, {
        path : 'student',
        component : StudentComponent
      }, {
        path : 'student-form/:id',
        component : StudentFormComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
