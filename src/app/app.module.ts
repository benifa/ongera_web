import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { LoginFormComponent } from './auth/login/login-form/login-form.component';
import { LoginSuccessComponent } from './auth/login/login-success/login-success.component';
import { LoginRoutingModule } from './auth/login-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
<<<<<<< HEAD
import { OperationsComponent } from './operations/operations.component';
import { UserSummaryComponent } from './operations/user-summary/user-summary.component';
import { PremiumComponent } from './operations/premium/premium.component';
import { PremiumActionsComponent } from './operations/premium/premium-actions/premium-actions.component';
import { OperationModule } from './operations/operation.module';
=======

>>>>>>> fef83f7a2df7c140a6cf692434ef88ccdbfc4c41

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LoginSuccessComponent,
    ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule, LoginRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
