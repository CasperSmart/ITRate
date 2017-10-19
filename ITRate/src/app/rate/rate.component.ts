import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule,RatingModule } from 'primeng/primeng';
import { MatButtonModule, MatExpansionModule, MatDialogModule,MatDialog,MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../services/data.service'
import { Company } from '../models/company'
import { asEnumerable } from 'linq-es2015';
import { CompanyRate } from '../models/companyRate'
import { Mark } from '../models/mark'
import { AddCompanyDialog } from '../dialogs/add.company/add.company.component'


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

  animal: string = 'test';
  name: string='test';
  
  search(event) {
      this.dataService.searchCompaniesByName(event.query).subscribe(request => {
      this.companies = request;
     });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddCompanyDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  private getCompanyRating(companyId: number){
      this.dataService.getCompanyRating(companyId).subscribe(request => {
      this.companyRating = request;
     });
  }

  private fillCompanyRateArray(){
    this.dataService.getMarks().subscribe(marks=>{
      marks.forEach(mark => {
        let cRate = new CompanyRate();
        let mk = new Mark();
        mk.Name = mark.Name;
        cRate.CompanyId = this.selectedCompany.Id;
        cRate.MarkId = mark.Id;
        cRate.RaterId = null; //todo: add authentication 
        cRate.Date = new Date();
        cRate.Value = 0;
        cRate.Mark = mk;
        this.companyRateArray.push(cRate);
      });
    });
  }

  isValidRatingForm(){
    return !asEnumerable(this.companyRateArray).Any(x=>x.Value <=0);
  }

  rate(){
    this.dataService.postCompanyRate(this.companyRateArray[0]).subscribe(request=>{
      console.log(request);
    }, error => {
      console.error(error);
    });
  }

  onSelect(item){
    this.selectedCompany = item;
    this.getCompanyRating(item.Id);
    this.fillCompanyRateArray();
  }

  handleRate(event){

  }
  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit() {
    //let t = new Company();
    ///t.Id = 1;
    //t.Name = 'dd';
    //this.onSelect(t);
  }

}
