import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  public navCssClickHandler():void{
    this.router.navigate(['css',{term:'dopho'}]);
  }

  public navAngularExamplesClickHandler():void{
    this.router.navigate(['angular','angularexamples']);
  }

  public navAngularDemosClickHandler():void{
    this.router.navigate(['angular','angulardemos'])
  }
}
