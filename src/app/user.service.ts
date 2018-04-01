import { Injectable } from '@angular/core';
import { USER } from './USER';
import { USERS } from './mock-users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http : HttpClient,private messageService : MessageService) { }

  private usersUrl = 'api/users';

  /*public getUsers():Observable<USER[]>{
    this.messageService.add('User Service :- users fetched');
    return of(USERS);
  }*/
  public getUsers = ():Observable<USER[]> => {
    return this.http.get<USER[]>(this.usersUrl);
  };

  public getUser(id : number):Observable<USER>{
    this.messageService.add(`User Service :- users fetched with the id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
