import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../../../shared/currency-selector/currency.model';

@Component({
  selector: 'app-premium-form',
  templateUrl: './premium-form.component.html',
  styleUrls: ['./premium-form.component.css']
})
export class PremiumFormComponent implements OnInit {
  currencies: ICurrency[];
  currency1 = {
    symbol: 'USD',
    name: 'US Dollars'
  };

  constructor() { }

  ngOnInit() {
 //  this.currencies =  this.operationService.getCurrencyList()
 //private operationService:OperationService
  }
}
