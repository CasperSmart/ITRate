import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CompanyComponent} from '../company/company.component';
import {RateComponent} from '../rate/rate.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {LoginComponent} from "../auth/login/login.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'admin',
    loadChildren: '../shared/lazy.module#LazyModule'
  },
  {
    path: 'auth',
    loadChildren: '../auth/auth.module#AuthModule',
  },
  {
    path: 'company/:id',
    component: CompanyComponent
  },
  {
    path: 'rate',
    component: RateComponent
  },
  {
    path: 'not_found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not_found',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
