import { NgModule } from '@angular/core';
import {MultiSelectModule,CheckboxModule,ChartModule,AutoCompleteModule,RatingModule} from 'primeng/primeng';

@NgModule({
  imports: [MultiSelectModule,CheckboxModule,ChartModule,AutoCompleteModule,RatingModule],
  exports: [MultiSelectModule,CheckboxModule,ChartModule,AutoCompleteModule,RatingModule]
})
export class NgprimeModule { }
