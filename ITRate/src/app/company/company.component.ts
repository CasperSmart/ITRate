import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {Mark} from '../models/mark'
import {RaterMarks, MarkValue} from '../models/raterMarks'
import { asEnumerable } from 'linq-es2015';
import * as moment from 'moment';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyId : number;
  marks : Mark[];
  selectedMark : Mark;
  marksChartData: any;
  options : any = {
    maxBarThickness: 5,
    scales: {
        xAxes: {
            min:0
        },
    }
};

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {

    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.dataService.getMarks().subscribe(m=>{
      this.marks = m;
    });

    
   }

   fillMarksChart(data: MarkValue[]){
    
    const orderedData = asEnumerable(data).OrderBy(x=>moment(x.Date).format('DD/MM/YYYY')).ToArray();
    this.marksChartData = {
      labels: asEnumerable(orderedData).Select(x=>moment(x.Date).format('DD/MM/YYYY')).ToArray(),
      datasets:[],
    };

    asEnumerable(orderedData).GroupBy(x=>moment(x.Date).format('DD/MM/YYYY')).ToArray().forEach(element => {

      var color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ','
       + (Math.floor(Math.random() * 256)) + ',' + 0.3 + ')';
      this.marksChartData.datasets.push({
        label: asEnumerable(element as MarkValue[]).FirstOrDefault().Mark.Name,
        backgroundColor: color,
        borderColor: color,
        data: asEnumerable(element as MarkValue[]).Select(x=>x.Value).ToArray()
      });
    });
   }

  onSelectMark(mark: Mark) 
  {
    this.selectedMark = mark;
    this.dataService.getMarkValues(this.companyId,mark.Id).subscribe(c=>{
      this.fillMarksChart(c);
    });
  }

  ngOnInit() {
  }

}
