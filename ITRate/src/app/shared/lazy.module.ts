import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '../modules/material/material.module';
import { DataService } from '../services/data.service';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


const routes: Routes = [
    { path: 'adminpanel', component: AdminComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent
  ],
  providers:[DataService]
})
export class LazyModule { }
