import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import {Subscription} from "rxjs/Subscription";
import {Observable} from 'rxjs/Observable';
import {CompanyRate} from '../models/companyRate'
import { asEnumerable } from 'linq-es2015';
import * as moment from 'moment';
import {ChartModule} from 'primeng/primeng';
import {SelectItem,Message,CheckboxModule} from 'primeng/primeng';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public companiesRates: CompanyRate[];
  data: any;
  msgs: Message[];

  constructor(private dataService: DataService) { }

 
  ngOnInit() {
     this.dataService.getCompaniesRatings().subscribe(request => {
     this.companiesRates =  asEnumerable(request).ToArray();
     this.initChart(false);
    }).unsubscribe;

  }
  
  selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }
  initChart(isMergeLocations) {
    //let companies = isMergeLocations? this.mergeRatingsByLocations(this.companiesRates): this.companiesRates;

    
        let datasets = [];
        let labels = asEnumerable(this.companiesRates).GroupBy(x=>x.Rater.Id)
        .Select(group=> moment((group as CompanyRate[])[0].Date).format('DD/MM/YYYY')).ToArray();

        asEnumerable(this.companiesRates).GroupBy(x=>x.Company.Id).ToArray().forEach(element => {
          let companyElement = element as CompanyRate[];
          let values = asEnumerable(companyElement).GroupBy(x=>x.Rater.Id).Select(group =>{
              let raterValues = asEnumerable(group as CompanyRate[]).Select(r=> r.Value);
              let values =  raterValues.Sum()/raterValues.Count();
              return values;}).ToArray();
          let company = companyElement[0].Company;
          datasets.push({
            label: company.Name.concat(' (').concat(company.CompanyAddress.Street).concat(' ').concat(company.CompanyAddress.BuildingNumber).concat(')'),
            data: values,
            fill: false,
            borderColor: "#"+((1<<24)*Math.random()|0).toString(16)
          });
        });
    this.data = {
      labels: labels,
      datasets: datasets
    }
  }

  onChangeMergeLocations(value){
    this.initChart(value);


    var t = asEnumerable(this.companiesRates).GroupBy(x=>x.Company.Name).ToArray();
    debugger;
    
  }

  mergeRatingsByLocations(data: CompanyRate[]){
   return asEnumerable(data).GroupBy(x=>x.Company.Name).ToArray();//group =>{
      //let raterValues = asEnumerable(group as CompanyRate[]).Select(r=> r.Value);
      //let values =  raterValues.Sum()/raterValues.Count();
      //return values;}).ToArray();
  }
}
