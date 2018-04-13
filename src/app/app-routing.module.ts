import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AngulardemosComponent } from './angulardemos/angulardemos.component';
import { AngularexamplesComponent } from './angularexamples/angularexamples.component';
import { CssexamplesComponent } from './cssexamples/cssexamples.component';

const routes : Routes = [
  {
    path :'userlist',
    component : UserListComponent
  },
  {
    path :'dashboard',
    component : DashboardComponent
  },
  {
    path :'',
    redirectTo : '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'users/:id',
    component : UserDetailComponent
  },
  {
    path:'angular/angulardemos',
    component : AngulardemosComponent
  },
  {
    path:'angular/angularexamples',
    component : AngularexamplesComponent
  },
  {
    path:'css',
    component : CssexamplesComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})

export class AppRoutingModule { }
