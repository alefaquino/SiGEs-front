import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EscolaComponent } from './forms/escola-form/escola-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,EscolaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,AppRoutingModule, HttpClientModule,FormsModule,CommonModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
