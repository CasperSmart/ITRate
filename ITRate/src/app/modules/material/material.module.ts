import { NgModule } from '@angular/core';
import {MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule,MatExpansionModule,MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule,MatExpansionModule,MatDialogModule],
  exports: [MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule,MatExpansionModule,MatDialogModule],
})
export class MaterialModule { }
