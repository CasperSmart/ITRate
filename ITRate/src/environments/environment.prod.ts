import {HttpHeaders} from '@angular/common/http';

const BASE_API_URL = 'http://itrate.somee.com/api/'; //'http://localhost:12949/api/'; 
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
export const environment: any = {
  production: true,
  getCompanyRatingUrl: BASE_API_URL + 'CompanyRateApi/GetByCompanyId',
  postCompanyRateUrl: BASE_API_URL + 'CompanyRateApi/Post',
  getCompaniesUrl: BASE_API_URL + 'CompanyApi/Get',
  findCompaniesByNameUrl: BASE_API_URL + 'CompanyApi/FindByName',
  searchCompaniesByNameUrl: BASE_API_URL + 'CompanyApi/SearchByName',
  getMarksUrl: BASE_API_URL + 'MarkApi/Get',
  api:{
    CompanyRateApi:'CompanyRateApi',
    CompanyApi:'CompanyApi'
  },
  postHeaders: headers 
};