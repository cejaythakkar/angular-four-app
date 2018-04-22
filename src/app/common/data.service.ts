import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http : Http ) { }


  public getStudents(){
    return this._http.get('/schoolapp/students')
                .map(result => result.json().data);
  }

}
