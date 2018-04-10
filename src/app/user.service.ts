import { Injectable } from '@angular/core';
import { USER } from './USER';
import { USERS } from './mock-users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { catchError , map , tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http : HttpClient,private messageService : MessageService) { }

  private usersUrl = 'api/users';

  /*public getUsers():Observable<USER[]>{
    this.messageService.add('User Service :- users fetched');
    return of(USERS);
  }*/
  private log = (message : string):void=>{
    this.messageService.add(`User Service ${message}`)
  }
  public getUsers = ():Observable<USER[]> => {
    return this.http.get<USER[]>(this.usersUrl)
                    .pipe( 
                      tap((users) => this.log(`UserService -> fetched Users`)),
                      catchError(this.handleError('getUsers',[])));
  };

  private handleError<T> (operation = 'operation',result?:T){
    return (error:any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  /*public getUser(id : number):Observable<USER>{
    this.messageService.add(`User Service :- users fetched with the id=${id}`);
    return of(USERS.find(user => user.id === id));
  }*/

  public updateUser(user : USER):Observable<any>{
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      }
    )
    const httpOptions = {
      headers
    }
    return this.http.put(this.usersUrl,user,httpOptions).pipe(
      tap(() => {this.log(`updated user with the id=${user.id}`)},
      catchError(this.handleError<any>('updateHero')))
    );
  }

  public addUser(user : USER):Observable<USER>{
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      }
    )
    const httpOptions = {
      headers
    }
    return this.http.post(this.usersUrl,user,httpOptions).pipe(
      tap((user : USER) => this.log(`added a user with the id=${user.id}`),
      catchError(this.handleError<USER>('Add User')))
    );
  }

  public searchUser(term:string) : Observable<USER[]>{
    term = term.trim();
    if(!term){
      return of([]);
    }
    const url = `api/users/?name=${term}`;
    return this.http.get<USER[]>(url).pipe(
      tap((_) => this.log(`found users with the term ${term}`)),
      catchError(this.handleError<USER[]>('search users',[]))
    );
  }

  public deleteUser(user : USER) : Observable<USER>{
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    let headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      }
    )
    const httpOptions = {
      headers
    }
    return this.http.delete<USER>(url,httpOptions).pipe(
      tap(() => this.log(`user deleted with the name=${user.name}`)),
      catchError(this.handleError<USER>(`failed to delete the user`))
    );
  }

  public getUser(id : number):Observable<USER>{
    // this.messageService.add(`User Service :- users fetched with the id=${id}`);
    const userDetailUrl = `${this.usersUrl}/${id}`;
    return this.http.get<USER>(userDetailUrl)
                    .pipe(tap((user) => this.log(`UserService fetched Detail with id=${id}`)),
                          catchError(this.handleError<USER>(`getHero id=${id}`)))
  }
}
