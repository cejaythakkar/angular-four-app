import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cssexamples',
  templateUrl: './cssexamples.component.html',
  styleUrls: ['./cssexamples.component.css']
})
export class CssexamplesComponent implements OnInit {

  public params :string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.params = JSON.stringify(params));
  }

}
