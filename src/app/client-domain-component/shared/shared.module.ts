import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { CurrenciesListDirectiveDirective } from './currencies-list-directive.directive';

@NgModule({
    declarations: [
        CurrencySelectorComponent, 
        CurrenciesListDirectiveDirective
        
    ],
    exports: [
        CommonModule
    ]

})
export class SharedModule {}
