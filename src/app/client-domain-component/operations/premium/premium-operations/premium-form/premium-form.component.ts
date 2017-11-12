import { User } from './../../../../user.model';
import { state } from '@angular/animations';
import { AuthService } from './../../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../../shared/operation.service';
import {ICurrency} from '../../../shared/currency-selector/currency.model';
import {ICustomInputBtn} from '../../../shared/currency-selector/customInputBtn.model';
import * as moment from 'moment';
import {OperationStatus} from '../../../shared/operation-status.model';
import { Subject } from 'rxjs/Subject';

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
  pricingDays: number;
  pricingdate: Date;
  maturityDate: Date;
  forexRate: number;
  minDate = new Date();
  maturityTime: number;
  localInterestRate: number;
  foreignInterestRate: number;
  expectedDepreciation: number;
  progressUri: string;
  constructor( private authService: AuthService) {
    // this.pricingdate = new Date();
    // this.maturityDate = new Date();
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
     }else
     // tslint:disable-next-line:one-line
     {
      this.displayCurrencySelectorB = true;
     }
  }

  chooseCurrencyA() {
    if (this.displayCurrencySelectorA === true) {
      this.displayCurrencySelectorA = false;
      console.log((this.displayCurrencySelectorA ));
     }
      // tslint:disable-next-line:one-line
      else
      // tslint:disable-next-line:one-line
      {
        this.displayCurrencySelectorA = true;
      }
}


choosenCurrencyB(choosenCurrencyB) {
  this.currencyB = choosenCurrencyB;
  this.displayCurrencySelectorB = false;
  this.updateForexRateIfApplicable();
  this.updateForeignInterestRateIfApplicable();
  this.updateExpectedDepreciationIfApplicable();
}

choosenCurrencyA(choosenCurrencyA) {
  this.currencyA = choosenCurrencyA;
  this.displayCurrencySelectorA = false;
  this.updateForexRateIfApplicable();
  this.updateLocalInterestRateIfApplicable();
  this.updateExpectedDepreciationIfApplicable();
}

// tslint:disable-next-line:member-ordering
CUSTOMINPUTBTN: ICustomInputBtn= {
  localInterestRate: false,
  foreignInterestRate: false,
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
  expectedDepreciation: false,
  typeBtn: false,
};

inputBtnclicked(btnName) {

    // if (btnName === 'interestRate') {
    // this.customInputBtn.interestRate = true;
    //  }

     switch (btnName) {
      // case "interestRate": {
      //   this.customInputBtn.interestRate = true;
      //   break;
      // }

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

   }
}

updateMaturityTime(maturityTime: number) {
  this.maturityTime = maturityTime;
  this.customInputBtn.maturityTime.thirty = (maturityTime == 30);;
  this.customInputBtn.maturityTime.sixty = (maturityTime == 60);
  this.customInputBtn.maturityTime.ninety = (maturityTime == 90);
  this.customInputBtn.maturityTime.oneHundredEighty = (maturityTime == 180);
  this.customInputBtn.maturityTime.threeHundredSixty = (maturityTime == 360);
  if (maturityTime != 30 && maturityTime != 60 && maturityTime != 90
    && maturityTime != 180 && maturityTime != 360  ) {
      this.customInputBtn.maturityTime.typeBtn = true;
    } else {
      this.customInputBtn.maturityTime.typeBtn = false;
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
 symbol: 'Eur',
 name: 'European euro'
   }
];

updateForexRateIfApplicable () {
  if (this.currencyA && this.currencyB && this.pricingdate) {
     this.authService.getForexRate(moment(this.pricingdate).format('DD-MM-YYYY'), this.currencyA['symbol'], this.currencyB['symbol'])
     .subscribe(
       (forexRate: any) => (
         this.forexRate = forexRate['forex rate at pricing date'],
         this.customInputBtn.forexRate = forexRate['forex rate at pricing date']),
         (error) => console.log(error)
     );
  }
}

updateForeignInterestRateIfApplicable() {
  if (this.currencyB && this.maturityTime && this.pricingdate) {
    this.authService.getInterestRate(moment(this.pricingdate).format('DD-MM-YYYY'), this.currencyB['symbol'], this.maturityTime)
    .subscribe(
      (forexRate: any) => (
        this.foreignInterestRate = forexRate['interest rate'],
        this.customInputBtn.foreignInterestRate = forexRate['interest rate']),
        (error) => console.log(error)
    );
  }
}

updateLocalInterestRateIfApplicable() {
  if (this.currencyA && this.maturityTime && this.pricingdate) {
    this.authService.getInterestRate(moment(this.pricingdate).format('DD-MM-YYYY'), this.currencyA['symbol'], this.maturityTime)
    .subscribe(
      (forexRate: any) => (
        this.localInterestRate = forexRate['interest rate'],
        this.customInputBtn.localInterestRate = forexRate['interest rate']),
        (error) => console.log(error)
    );
  }
}

updateExpectedDepreciationIfApplicable() {
  if (this.currencyA &&  this.currencyB && this.maturityTime && this.pricingdate) {
     this.authService.getExpectedDepreciation(moment(this.pricingdate).format('DD-MM-YYYY'),  this.currencyA['symbol'],
     this.currencyB['symbol'], this.maturityTime)
    .subscribe(
      (progressUri: string) => (
        this.progressUri = progressUri,
        this.getExpectationProgress(progressUri)
      ),
        (error) => console.log(error)
    );
  }
}

getExpectationProgress(progressUri: String) {
  this.authService.getExpectationProgress(progressUri)
  .subscribe(
    (statusResponse: OperationStatus) => (
      this.updateDepreciationOperationProgress(statusResponse),
      (error) => console.log(error)
    )
  );
}

updateDepreciationOperationProgress(status: OperationStatus) {
if (status.current == 100) {
    this.expectedDepreciation = status.result;
    this.customInputBtn.expectedDepreciation = true;
    this.authService.isLoading = false;
} else if (status.state == 'FAILURE') {
  this.authService.isLoading = false;
} else {
  setTimeout(() => { this.getExpectationProgress(this.progressUri); }, 10000);
}

}

onPricingDateChange($event) {
  this.pricingDays = this.calculateDate(Date.now(), Date.parse($event.value));
  this.customInputBtn.pricingDate = true;
  this.pricingdate = new Date($event.value);
  this.updateForexRateIfApplicable();
  this.updateForeignInterestRateIfApplicable();
  this.updateLocalInterestRateIfApplicable();
  this.updateExpectedDepreciationIfApplicable();
}

onPricingDateBulbeChange() {
  if (this.pricingDays) {
     this.pricingdate = moment(new Date()).add( this.pricingDays, 'days').toDate();
     this.updateForexRateIfApplicable();
     this.updateForeignInterestRateIfApplicable();
     this.updateLocalInterestRateIfApplicable();
     this.updateExpectedDepreciationIfApplicable();
  }
}

onMaturityDateChange ($event) {
  this.updateMaturityTime(this.calculateDate(Date.now(), Date.parse($event.value)));
  this.maturityDate = new Date($event.value);
  this.updateForeignInterestRateIfApplicable();
  this.updateLocalInterestRateIfApplicable();
  this.updateExpectedDepreciationIfApplicable();
}

calculateDate(startDate: number, endDate: number) {
  console.log(startDate);
  console.log(endDate);
    const diffc = endDate - startDate;
    return Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
  }

onMaturityTimeSelected($event) {
  this.updateMaturityTime($event.target.value);
  this.maturityDate = moment(new Date()).add( this.maturityTime, 'days').toDate();
  this.updateForeignInterestRateIfApplicable();
  this.updateLocalInterestRateIfApplicable();
  this.updateExpectedDepreciationIfApplicable();
}

computePremium() {
  this.authService.computePremium(moment(this.pricingdate).format('DD-MM-YYYY'),
  this.currencyA['symbol'], this.currencyB['symbol'], this.localInterestRate,
   this.foreignInterestRate,  this.maturityTime, this.forexRate, this.expectedDepreciation);
}

}
