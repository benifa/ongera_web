import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginSuccessComponent } from './login/login-success/login-success.component';

const recipeRoutes: Routes = [
    {
        path: 'login', component: LoginComponent,
        children: [{ path: '', component: LoginFormComponent },
        { path: 'login:id', component: LoginSuccessComponent, canActivate: [AuthGuard] }]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
