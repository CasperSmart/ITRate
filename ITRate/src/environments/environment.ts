// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_API_URL = 'http://itrate.somee.com/api/'; //'http://localhost:12949/api/'; 

export const environment = {
  production: false,
  getCompaniesRatingsUrl: BASE_API_URL.concat('CompanyRateApi/Get')
};
