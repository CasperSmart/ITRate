import { NgModule } from '@angular/core';
import {MultiSelectModule,CheckboxModule,ChartModule} from 'primeng/primeng';

@NgModule({
  imports: [MultiSelectModule,CheckboxModule,ChartModule],
  exports: [MultiSelectModule,CheckboxModule,ChartModule]
})
export class NgprimeModule { }
