import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { ClientDomainComponent } from './client-domain.component';
import { LoginModule } from './auth/login.modules';
import { OperationModule } from './operations/operation.module';


const clientRoutes: Routes = [

    { path: '', component: ClientDomainComponent,
     children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'operations', loadChildren: './operations/operation.module#OperationModule'
        , canActivate: [AuthGuard]
     },
        { path: 'login', loadChildren: './auth/login.modules#LoginModule' }
    ]
   }
];

export function getOperationModule() {
    return OperationModule;
}

export function getLoginModule() {
    return LoginModule;
}

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]

})
export class ClientDomainRoutingModule {
}
