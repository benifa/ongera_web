import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { OperationsComponent } from './operations.component';

const operationRoutes: Routes = [
    { path: 'operation', component: OperationsComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(operationRoutes)
    ],
    exports: [RouterModule]
})
export class OperationRoutingModule {

}
