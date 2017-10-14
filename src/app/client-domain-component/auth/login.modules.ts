import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent,
        LoginSuccessComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        LoginRoutingModule
    ]
})
export class LoginModule {

}
