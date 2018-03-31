import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
    path:'detail/:id',
    component : UserDetailComponent
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
