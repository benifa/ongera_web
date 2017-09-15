import { ClientDomainRoutingModule } from './client-domain-routing.module';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientDomainComponent } from './client-domain.component';
import { NgModule, OnInit } from '@angular/core';
import { LoginModule } from './auth/login.modules';
import { OperationModule } from './operations/operation.module';
import { AuthGuard } from './auth/auth-guard.service';
import { ActivatedRoute, Params } from '@angular/router';

@NgModule({
    declarations: [
        ClientDomainComponent
    ],
    imports: [
        CommonModule, FormsModule, ClientDomainRoutingModule, LoginModule, OperationModule
    ],
    providers: [AuthService, AuthGuard]
})
export class ClientDomainModule {
}
