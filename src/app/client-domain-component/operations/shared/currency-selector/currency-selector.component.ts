import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{ICurrency} from'./currency.model'

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  @Input() currency: ICurrency;
  @Output() eventClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}