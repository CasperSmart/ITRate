import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCru0uih1xHXEsO6lMNrvWqa_IEwNNmNxY',
    authDomain: 'itrate-d5a2f.firebaseapp.com',
    databaseURL: 'https://itrate-d5a2f.firebaseio.com/',
    storageBucket: '.appspot.com',
    messagingSenderId: '',
};

@NgModule({
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
  ]
})
export class SharedModule { }
