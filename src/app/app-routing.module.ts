import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';


const appRoutes: Routes = [

    { path: ':id', component: AppComponent,
     children: [
        { path: '', redirectTo: '/login', pathMatch: 'prefix' },
        { path: 'login', component: LoginComponent }
    ]
   }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
