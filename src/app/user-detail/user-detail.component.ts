import { Component, OnInit ,Input , } from '@angular/core';
import { USER } from '../USER';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: USER;
  constructor(private activatedRoute : ActivatedRoute , private location : Location , private userService : UserService) { 

  }
  
  ngOnInit() {
    this.getUser();
  }

  public selectedUser:USER;
  goBack():void{
    this.location.back();
  }
  getUser():void{
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.selectedUser = user);
  }

}
