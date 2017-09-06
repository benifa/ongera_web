import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { LoginFormComponent } from './auth/login/login-form/login-form.component';
import { LoginSuccessComponent } from './auth/login/login-success/login-success.component';
import { LoginModule } from './auth/login.modules';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
<<<<<<< HEAD
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { CurrenciesListDirectiveDirective } from './currencies-list-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LoginSuccessComponent,
    MyNewDirectiveDirective,
    CurrenciesListDirectiveDirective
    ],
=======
import { OperationsComponent } from './operations/operations.component';
import { UserSummaryComponent } from './operations/user-summary/user-summary.component';
import { PremiumComponent } from './operations/premium/premium.component';
import { PremiumActionsComponent } from './operations/premium/premium-actions/premium-actions.component';
import { PremiumFormComponent } from './operations/premium/premium-form/premium-form.component';
import { PremiumResultsComponent } from './operations/premium/premium-results/premium-results.component';

@NgModule({
  declarations: [
    AppComponent
  ],


>>>>>>> dbb1aec9fdbaa69a3fd678b436138180fdf52383
  imports: [
    BrowserModule, FormsModule, HttpModule, LoginModule, AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
