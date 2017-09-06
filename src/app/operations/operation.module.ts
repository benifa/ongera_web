import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PremiumComponent } from './premium/premium.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { OperationRoutingModule } from './operation-routing.module';

@NgModule({
    declarations: [
        PremiumComponent,
        UserSummaryComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule, FormsModule,
        OperationRoutingModule
    ]
})

export class OperationModule {

}
