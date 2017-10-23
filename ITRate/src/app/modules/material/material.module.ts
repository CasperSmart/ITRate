import { NgModule } from '@angular/core';
import {MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule,MatTableModule,MatExpansionModule,MatInputModule,MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule,MatTableModule,MatExpansionModule,MatInputModule,MatFormFieldModule],
  exports: [MatTabsModule,MatProgressBarModule, MatCheckboxModule, MatButtonModule,MatTableModule,MatExpansionModule,MatInputModule,MatFormFieldModule],
})
export class MaterialModule { }
