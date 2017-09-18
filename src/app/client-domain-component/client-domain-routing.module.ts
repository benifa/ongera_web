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
        { path: 'operations', loadChildren: () => OperationModule, canActivate: [AuthGuard] },
        { path: 'login', loadChildren: () =>  LoginModule }
    ]
   }
];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]

})
export class ClientDomainRoutingModule {
}
