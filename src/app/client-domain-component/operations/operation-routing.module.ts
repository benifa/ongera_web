import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { OperationsComponent } from './operations.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';

const operationRoutes: Routes = [
    { path: '', component: OperationsComponent, children: [
        {path: 'sum', component: UserSummaryComponent}
    ]
}
];
@NgModule({
    imports: [
        RouterModule.forChild(operationRoutes)
    ],

    exports: [RouterModule]
})
export class OperationRoutingModule {

}
