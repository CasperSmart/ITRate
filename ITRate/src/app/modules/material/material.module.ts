import { NgModule } from '@angular/core';
import {MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule],
  exports: [MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule],
})
export class MaterialModule { }
