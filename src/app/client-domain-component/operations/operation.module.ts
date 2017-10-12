import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PremiumComponent } from './premium/premium.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { OperationRoutingModule } from './operation-routing.module';
import { OperationsComponent } from './operations.component';
import { PremiumActionsComponent } from './premium/premium-actions/premium-actions.component';
import { PremiumOperationsComponent } from './premium/premium-operations/premium-operations.component';
import { PremiumFormComponent } from './premium/premium-operations/premium-form/premium-form.component';
import { PremiumResultsComponent } from './premium/premium-operations/premium-results/premium-results.component';
import { CurrencySelectorComponent } from './shared/currency-selector/currency-selector.component';
import { CurrenciesListDirectiveDirective } from './shared/currencies-list-directive.directive';
import { OperationService } from './shared/operation.service';


@NgModule({
    declarations: [
        OperationsComponent,
        PremiumComponent,
        UserSummaryComponent,
        PremiumActionsComponent,
        PremiumOperationsComponent,
        PremiumFormComponent,
        PremiumResultsComponent,
        CurrencySelectorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        OperationRoutingModule
    ]
})

export class OperationModule {

}

