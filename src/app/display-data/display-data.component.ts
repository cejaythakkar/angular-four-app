import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-display-data',
  template: `
    <div>
      <div class="titlesection"><h1>{{title}}</h1></div>
      <div class="myherosection"><h4>my favourite hero is {{myHero}}</h4></div>
      <div class="listOfHerosSection">
        <h2>list of heros</h2>
        <ul>
          <li *ngFor="let hero of listOfHeros">
            <span>{{hero.name}}</span>
          </li>
        </ul>
      </div>
      <p *ngIf="listOfHeros.length > 3">there are many heros!!!</p>
    </div>
  `,
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  public title : string;
  public myHero : string;
  public listOfHeros : Hero[];

  constructor() { 
    this.title = 'Hello World';
    this.myHero = "Jay Thakkar";
    this.listOfHeros = [ new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')];
  }

  ngOnInit() {
  }

}
