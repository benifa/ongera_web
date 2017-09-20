import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../../shared/operation.service';
import {ICurrency} from '../../../shared/currency-selector/currency.model';

@Component({
  selector: 'app-premium-form',
  templateUrl: './premium-form.component.html',
  styleUrls: ['./premium-form.component.css']
})
export class PremiumFormComponent implements OnInit {
  currencies: ICurrency[];
  currencyA: any;
  currencyB: any;
  displayCurrencySelectorB: boolean;
  displayCurrencySelectorA: boolean;

  constructor( ) {

   }

  ngOnInit() {
    this.currencies = this.CURRENCIES;
    this.currencyA = this.CURRENCIES[1];
    this.currencyB = this.CURRENCIES[3];
    this.displayCurrencySelectorB = false;
    this.displayCurrencySelectorA = false;

  }


  chooseCurrencyB() {
     if (this.displayCurrencySelectorB === true) {
      this.displayCurrencySelectorB = false;
     }else{
      this.displayCurrencySelectorB = true;
     }
  }

  chooseCurrencyA() {
    if (this.displayCurrencySelectorA === true) {
      this.displayCurrencySelectorA = false;
      console.log((this.displayCurrencySelectorA ));
      
     }
      else {this.displayCurrencySelectorA = true;
      }
}


choosenCurrencyB(choosenCurrencyB){
  this.currencyB = choosenCurrencyB;
  this.displayCurrencySelectorB = false;
}

choosenCurrencyA(choosenCurrencyA){
  this.currencyA = choosenCurrencyA;
  this.displayCurrencySelectorA = false;
}
 // tslint:disable-next-line:member-ordering
 CURRENCIES: ICurrency [] = [
  {
 symbol:  'USD',
 name: 'American Dollar'
   },
 {
 symbol: '£',
 name: 'Great Britain Pound'
   },
  {
 symbol: 'RWF',
 name: 'Rwandan Francs'
   },
     {
 symbol:  'FBU',
 name:  'Burandian Francs'
   },
   {
 symbol: 'KES',
 name: 'Kenyan Shillings'
   },
       {
 symbol: 'UGS',
 name: 'Uganda Shillings'
   },
       {
 symbol: 'Euro',
 name: 'European euro'
   }
];


}
