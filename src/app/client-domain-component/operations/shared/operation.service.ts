import { Injectable } from '@angular/core';
import{ICurrency} from'./currency-selector/currency.model'




@Injectable()
export class OperationService{

  getCurrencyList():ICurrency[]{
    
      return CURRENCIES
  }
}



const CURRENCIES :ICurrency [] = [
    {
   symbol:"USD",
   name:"American Dollar"
     },
   {
   symbol:"£",
   name:"Great Britain Pound"
     },
    {
   symbol:"RWF",
   name:"Rwandan Francs"
     },
       {
   symbol:"FBU",
   name:"Burandian Francs"
     },
     {
   symbol:"KES",
   name:"Kenyan Shillings"
     },
         {
   symbol:"UGS",
   name:"Uganda Shillings"
     },
         {
   symbol:"Euro",
   name:"European euro"
     }
];