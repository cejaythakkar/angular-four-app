import { Component } from '@angular/core';
import { Article } from './article.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Array<Article>;
  products : Array<Product>;
  constructor(){
    this.articles = [new Article('phalanu','-----'),
                      new Article('dhiknu','-----'),
                      new Article('fuck','-----')];
    this.products = [new Product('p1','productA','------',35)];
  }

  addALink(titleInput : HTMLInputElement,linkInput : HTMLInputElement) : boolean{
    this.articles.push(new Article(titleInput.value,linkInput.value));
    return false;
  }
}
