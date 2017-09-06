import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { OperationsComponent } from './operations/operations.component';


const appRoutes: Routes = [

    { path: ':id', component: AppComponent,
     children: [
        // { path: '', redirectTo: ':id/login', pathMatch: 'full' },
        { path: ':id/login', component: LoginComponent },
        { path: ':operations', component: OperationsComponent }
    ]
   }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
