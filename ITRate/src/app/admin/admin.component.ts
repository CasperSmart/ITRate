import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../services/data.service'
import { Mark } from '../models/mark'
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  markForm: FormGroup;
  displayedMarkColumns = ['Id', 'Name'];
  marksDataSource: MarksDataSource;
  
  constructor(private fb: FormBuilder, private dataService: DataService) {
      this.fillMarkDataSource();
   }

  fillMarkDataSource(){
    this.dataService.getMarks().subscribe(result=>{
      this.marksDataSource = new MarksDataSource();
      this.marksDataSource.init(result);
    })
  }

  ngOnInit() {
    this.markForm = this.fb.group( {
      mark: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  addMark():void{
    if (this.markForm.valid){
        const mark = new Mark();
        mark.Name = this.markForm.get('mark').value;
        this.dataService.addMark(mark).subscribe(x=>{
        this.markForm.reset('mark');
        this.fillMarkDataSource();
      });
    }
  }

  isValidForm(): boolean{
      return this.markForm.valid;
  }
}

export class MarksDataSource extends DataSource<any> {
  private marks: Mark[] = [];

  init(marks: Mark[]){
    this.marks = marks;
  }

  connect(): Observable<Mark[]> {
    return Observable.of(this.marks);
  }

  disconnect() {}
}
