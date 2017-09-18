import { Component, OnInit } from '@angular/core';
//import{OperationService} from '../../../shared/operation.service';
import{ICurrency} from'../../../shared/currency-selector/currency.model'

@Component({
  selector: 'app-premium-form',
  templateUrl: './premium-form.component.html',
  styleUrls: ['./premium-form.component.css']
})
export class PremiumFormComponent implements OnInit {
  currencies:ICurrency[] 

  constructor() { }

  ngOnInit() {
 //  this.currencies =  this.operationService.getCurrencyList()
 //private operationService:OperationService
  }
  currency1 ={
    symbol: "USD",
    name: "US Dollars"
              
  }

}
