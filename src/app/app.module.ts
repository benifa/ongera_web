import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './auth/login.modules';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { OperationModule } from './operations/operation.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule, LoginModule, OperationModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
