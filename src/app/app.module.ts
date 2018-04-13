import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ArticleComponent } from './article/article.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypescriptTestComponent } from './typescript-test/typescript-test.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UserSearchComponent } from './user-search/user-search.component';
import { HeaderComponent } from './header/header.component';
import { AngulardemosComponent } from './angulardemos/angulardemos.component';
import { AngularexamplesComponent } from './angularexamples/angularexamples.component';
import { CssexamplesComponent } from './cssexamples/cssexamples.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserListComponent,
    UserItemComponent,
    ArticleComponent,
    ProductListComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TypescriptTestComponent,
    DisplayDataComponent,
    UserSearchComponent,
    HeaderComponent,
    AngulardemosComponent,
    AngularexamplesComponent,
    CssexamplesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation : false}),
    BsDropdownModule.forRoot()
  ],
  providers: [
    UserService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
