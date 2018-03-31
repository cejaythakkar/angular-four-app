import { Component, OnInit } from '@angular/core';
import { USER } from '../USER';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users: USER[] = [];
 
  constructor(private UserService: UserService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.UserService.getUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }
}
