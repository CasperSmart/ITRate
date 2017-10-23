import { Injectable } from '@angular/core'
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { RequestOptions ,RequestOptionsArgs} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {CompanyRate} from '../models/companyRate'
import {Company} from '../models/company'
import {Mark} from '../models/mark'
import {Rater} from '../models/rater'
import {RaterMarks,MarkValue} from '../models/raterMarks'
import {Subject} from 'rxjs/Subject';


@Injectable()
export class DataService {

    private loadingThread = new Subject<boolean>();

    constructor(private http: HttpClient) {
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(environment.getCompaniesUrl);
    }

    getCompanyById(id:number): Observable<Company> {
        const params = new HttpParams().set('id',id.toString());
        return this.http.get<Company>(environment.getCompaniesUrl, {params: params});
    }

    getCompanyRating(companyId: number): Observable<number> {
        const params = new HttpParams().set('companyId', companyId.toString());
        return this.http.get<number>(environment.getCompanyRatingUrl, {params: params});
    }

    
    getCompanyRates(companyId: number): Observable<RaterMarks[]> {
        const params = new HttpParams().set('companyId', companyId.toString());
        return this.http.get<RaterMarks[]>(environment.getCompanyRatesUrl, {params: params});
    } 
    
    getMarkValues(companyId: number, markId: number): Observable<MarkValue[]> {
        const params = new HttpParams().set('companyId', companyId.toString()).set('markId', markId.toString());
        return this.http.get<MarkValue[]>(environment.getMarkValuesUrl, {params: params});
    }
    
    getRatings(): Observable<CompanyRate[]> {
        return this.http.get<CompanyRate[]>(environment.getGetRatingsUrl);
    }
    
    getRaterMarks(raterId: number, companyId: number): Observable<CompanyRate[]> {
        const params = new HttpParams().set('raterId', raterId.toString()).set('companyId', companyId.toString());
        return this.http.get<CompanyRate[]>(environment.getRaterMarksUrl, {params: params});
    }
    
    getCompaniesRatings(): Observable<CompanyRate[]> {
        return this.http.get<CompanyRate[]>(environment.getCompaniesRatingsUrl);
    }

    postCompanyRate(item: CompanyRate): Observable<CompanyRate> {
        let newItem = Object.assign({}, item);
        newItem.Mark = null;
        newItem.Rater = null;
        newItem.Company = null;
        
        let body = new URLSearchParams();
        body.set('CompanyId', newItem.CompanyId.toString());
        body.set('MarkId', newItem.MarkId.toString());
        body.set('RaterId', newItem.RaterId.toString());
        body.set('Value', newItem.Value.toString());
        body.set('Date', newItem.Date.toString());
        return this.http.post<CompanyRate>(environment.postCompanyRateUrl, body.toString(), { headers: environment.postHeaders });
    }

    postRater(email: string): Observable<Rater> {
        let body = new URLSearchParams();
        body.set('Username', email);
      return this.http.post<Rater>(environment.postRaterUrl, body.toString(),{ headers: environment.postHeaders });
    }

    getMarks(): Observable<Mark[]> {
        return this.http.get<Mark[]>(environment.getMarksUrl);
    }

    addMark(item: Mark): Observable<Mark> {
        let body = new URLSearchParams();
        body.set('Name', item.Name);
        return this.http.post<Mark>(environment.postMarkUrl, body.toString(), { headers: environment.postHeaders });
    }

    getRaterById(id:number): Observable<Rater> {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get<Rater>(environment.getRaterByIdUrl, {params: params});
    }

    getRaterByUsername(username:string): Observable<Rater> {
        const params = new HttpParams().set('username', username);
        return this.http.get<Rater>(environment.getRaterByUsernameUrl, {params: params});
    }
    
    searchCompaniesByName(query): Observable<Company[]> {
        const params = new HttpParams().set('name',query)
         return this.http.post<Company[]>(environment.findCompaniesByNameUrl+'?name='+query, null,{ headers: environment.postHeaders });
    }
    
    toggleLoading(isShow: boolean) {
        this.loadingThread.next(isShow);
    }

    listenToogling(): Observable<boolean> {
        return this.loadingThread.asObservable();
    }
}
