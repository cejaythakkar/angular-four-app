import { Component, OnInit } from '@angular/core';
import { USER } from '../USER';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public uiTeamMembers: any[];
  public selectedUser : USER;

  constructor(private userService : UserService) { 

  }

  private getUsers():void{
    let self = this;
    this.userService.getUsers().subscribe(function(users){
      self.uiTeamMembers = users;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
