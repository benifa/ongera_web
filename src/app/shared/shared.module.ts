import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';

@NgModule({
    declarations: [
        CurrencySelectorComponent
        
    ],
    exports: [
        CommonModule
    ]

})
export class SharedModule {}
