import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent,
        LoginSuccessComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule, FormsModule,
        LoginRoutingModule
    ]
})
export class LoginModule {

}
