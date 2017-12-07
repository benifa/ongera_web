import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDomainModule } from './client-domain-component/client-domain.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'bk', pathMatch: 'full' },
    { path: ':id', loadChildren: './client-domain-component/client-domain.module#ClientDomainModule'}
];

export function getClientModule() {
    return ClientDomainModule;
}

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
