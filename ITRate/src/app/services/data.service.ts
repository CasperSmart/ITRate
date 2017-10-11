import { Injectable } from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {CompanyRate} from '../models/companyRate'

@Injectable()
export class DataService {
    constructor(private http: HttpClient){
    }

    getCompaniesRatings(): Observable<CompanyRate[]> {
        return this.http.get<CompanyRate[]>(environment.getCompaniesRatingsUrl);
    }
}
