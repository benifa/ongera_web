import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientDomainModule } from './client-domain-component/client-domain.module';
import { LoginComponent } from './client-domain-component/auth/login/login.component';
import { OperationsComponent } from './client-domain-component/operations/operations.component';
import { OperationModule } from './client-domain-component/operations/operation.module';
import { LoginModule } from './client-domain-component/auth/login.modules';
import { AuthGuard } from './client-domain-component/auth/auth-guard.service';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'bk', pathMatch: 'full' },
    { path: ':id', loadChildren: () => ClientDomainModule }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
