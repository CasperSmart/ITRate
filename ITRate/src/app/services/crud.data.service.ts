import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable()
export class CrudDataService<T> {

  private api :string;
  constructor(private http: HttpClient, api: string) {
    this.api = api;
   }

  get(): Observable<T[]> {
    return this.http.get<T[]>(environment.api[this.api].concat('Get'));
  }

  getById(id: string): Observable<T> {
    const params = new HttpParams().set('id', id);
    return this.http.get<T>(environment.api[this.api].concat('Get'), {params: params});
  }

}
