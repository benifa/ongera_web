import { CurrenciesListDirectiveDirective } from './currencies-list-directive.directive';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        CurrenciesListDirectiveDirective
    ],
    exports: [
        CurrenciesListDirectiveDirective
    ]

})
export class SharedModule {}
