import { Injectable } from '@angular/core'
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';
import { RequestOptions ,RequestOptionsArgs} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {CompanyRate} from '../models/companyRate'
import {Company} from '../models/company'
import {Mark} from '../models/mark'



@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(environment.getCompaniesUrl);
    }

    getCompanyRating(companyId: number): Observable<number> {
        const params = new HttpParams().set('companyId', companyId.toString());
        return this.http.get<number>(environment.getCompanyRatingUrl, {params: params});
    }
    
    getCompaniesRatings(): Observable<CompanyRate[]> {
        return this.http.get<CompanyRate[]>(environment.getCompaniesRatingsUrl);
    }

    postCompanyRate(item: CompanyRate): Observable<CompanyRate> {
        let newItem = Object.assign({}, item);
        newItem.Mark = null;
        newItem.Rater = null;
        newItem.Company = null;
        newItem.RaterId = 1;
        
        let body = new URLSearchParams();
        body.set('CompanyId', newItem.CompanyId.toString());
        body.set('MarkId', newItem.MarkId.toString());
        body.set('RaterId', newItem.RaterId.toString());
        body.set('Value', newItem.Value.toString());
        body.set('Date', newItem.Date.toString());
    
        

        return this.http.post<CompanyRate>(environment.postCompanyRateUrl, body.toString(), { headers: environment.postHeaders });
    }

    getMarks(): Observable<Mark[]> {
        return this.http.get<Mark[]>(environment.getMarksUrl);
    }
    
    searchCompaniesByName(query): Observable<Company[]> {
        const params = new HttpParams().set('name',query)
         return this.http.post<Company[]>(environment.findCompaniesByNameUrl+'?name='+query, null ,{ headers: environment.postHeaders });
     }
    // searchCompaniesByName(query): Observable<Company[]> {
    //    const params = new HttpParams().set('name',query)
    //     return this.http.get<Company[]>(environment.searchCompaniesByNameUrl, { params: params });
    // }
}
