import { ClientDomainModule } from './client-domain-component/client-domain.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    FormsModule, BrowserModule, BrowserAnimationsModule, HttpModule, AppRoutingModule, ClientDomainModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
