import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { USER } from '../USER';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  public users$: Observable<USER[]>;
  private searchTerms = new Subject<string>();

  constructor(private userService : UserService) { }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.users$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.userService.searchUser(term))
    );
  }

}
