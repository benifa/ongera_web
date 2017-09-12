import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationModule } from './operations/operation.module';
import { LoginModule } from './auth/login.modules';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'bk', pathMatch: 'full' },
    { path: ':id', component: AppComponent,
     children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'operations', loadChildren: () => OperationModule, canActivate: [AuthGuard] },
        { path: 'login', loadChildren: () =>  LoginModule }
    ]
   }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
