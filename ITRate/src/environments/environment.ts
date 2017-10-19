// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import {HttpHeaders} from '@angular/common/http';

const BASE_API_URL = 'http://itrate.somee.com/api/'; //'http://localhost:12949/api/'; 
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
export const environment: any = {
  production: false,
  getCompaniesRatingsUrl: BASE_API_URL + 'CompanyRateApi/Get',
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
