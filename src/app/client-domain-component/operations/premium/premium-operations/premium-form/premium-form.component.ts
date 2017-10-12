import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../../shared/operation.service';
import {ICurrency} from '../../../shared/currency-selector/currency.model';
import {ICustomInputBtn} from '../../../shared/currency-selector/customInputBtn.model';
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
  customInputBtn: ICustomInputBtn;
  date: Date;

  constructor( ) {
    this.date = new Date();
   }

  ngOnInit() {
    this.currencies = this.CURRENCIES;
    this.customInputBtn = this.CUSTOMINPUTBTN;
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
      else
      // tslint:disable-next-line:one-line
      {
        this.displayCurrencySelectorA = true;
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
CUSTOMINPUTBTN: ICustomInputBtn= {

  interestRate: false,
  forexRate: false,
  pricingDate: false,
  maturityTime: {
      thirty: false,
      sixty: false,
      ninety: false,
      oneHundredEighty: false,
      threeHundredSixty: false,
      typeBtn: false,
  },
  typeBtn: false,
  forexRateTwo: false
};

inputBtnclicked(btnName) {

    // if (btnName === 'interestRate') {
    // this.customInputBtn.interestRate = true;
    //  }

     switch (btnName) {
      case "interestRate": {
        this.customInputBtn.interestRate = true;
        break;
      }

      case "forexRate": {
        this.customInputBtn.forexRate = true;
        break;
      }
     
      case "pricingDate": {
        this.customInputBtn.pricingDate = true;
        break;
      }

      case "maturityTime30": {
        this.customInputBtn.maturityTime.thirty = true;
        break;
      }
      case "maturityTime60": {
        this.customInputBtn.maturityTime.sixty = true;
        break;
      }
      case "maturityTime180": {
        this.customInputBtn.maturityTime.oneHundredEighty = true;
        break;
      }
      case "maturityTime90": {
        this.customInputBtn.maturityTime.ninety = true;
        break;
      }

      case "maturityTime360": {
        this.customInputBtn.maturityTime.threeHundredSixty = true;
        break;
      }
      case "maturityTimeType": {
        this.customInputBtn.maturityTime.typeBtn = true;
        break;
      }
      // tslint:disable-next-line:quotemark
      case "typeBtn": {
        this.customInputBtn.typeBtn = true;
        break;
      }
      case "forexRateColumnTwo": {
        this.customInputBtn.forexRateTwo = true;
        break;
      }

   }


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
