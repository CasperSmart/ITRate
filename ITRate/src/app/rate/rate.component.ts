import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule,RatingModule } from 'primeng/primeng';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { DataService } from '../services/data.service'
import { Company } from '../models/company'
import { asEnumerable } from 'linq-es2015';
import { CompanyRate } from '../models/companyRate'
import { Mark } from '../models/mark'
import {AuthService} from '../auth/auth.service';



@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  selectedCompany: Company;
  companies: Company[] = [];
  companyRateArray: CompanyRate[] = [];
  companyRating: number;
  isRated:boolean = false;

  constructor(private dataService: DataService,public authService: AuthService) { }
  
   search(event) {
      this.dataService.searchCompaniesByName(event.query).subscribe(request => {
      this.companies = request;
     });
  }

   getCompanyRating(companyId: number){
      this.dataService.getCompanyRating(companyId).subscribe(request => {
      this.companyRating = request;
     });
  }

   fillCompanyRateArray(){
    this.companyRateArray = [];
    if(this.authService.isLoggedIn()){
      this.authService.user.subscribe(user=> {
      this.dataService.getRaterByUsername(user.email).subscribe(rater=>{
        if(!rater || rater.Id <=0)  throw 'Rater not found!';
        this.dataService.getMarks().subscribe(marks=>{
          marks.forEach(mark => {
            let cRate = new CompanyRate();
            let mk = new Mark();
            mk.Name = mark.Name;
            cRate.CompanyId = this.selectedCompany.Id;
            cRate.MarkId = mark.Id;
            cRate.RaterId = rater.Id;
            cRate.Date = new Date().toISOString();
            cRate.Value = 0;
            cRate.Mark = mk;
            this.companyRateArray.push(cRate);
          });
        });

        //if rater take surveys then fill them
       this.dataService.getRaterMarks(rater.Id, this.selectedCompany.Id).subscribe(arrayValues=>{
       if(arrayValues.length > 0){
        
        this.companyRateArray = asEnumerable(this.companyRateArray).Join(arrayValues,
              x=>x.MarkId,
              y=>y.MarkId, (x,y) =>{
              x.Value = y.Value;
              return x;
            }).ToArray();
            this.isRated = true;
          }
        
       });
     

      });
     });

    }
   
  }

   isValidRatingForm(){
    return asEnumerable(this.companyRateArray).Any(x=>x.Value <=0) == false && this.isRated == false;
  }

   rate(){
    this.isRated = true;
    this.companyRateArray.forEach(element => {
      this.dataService.postCompanyRate(element).subscribe(request=>{
        console.log(request);
      }, error => {
        console.error(error);
      });
    });
  }

   onSelect(item){
    this.isRated = false;
    this.selectedCompany = item;
    this.getCompanyRating(item.Id);
    this.fillCompanyRateArray();
  }

  ngOnInit() {
  }

}
