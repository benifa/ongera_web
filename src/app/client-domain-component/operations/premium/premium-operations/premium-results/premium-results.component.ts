import { AuthService } from './../../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {Premium} from './../../../../premium.model';


@Component({
  selector: 'app-premium-results',
  templateUrl: './premium-results.component.html',
  styleUrls: ['./premium-results.component.css']
})
export class PremiumResultsComponent implements OnInit {
  min_premium: number;
  max_premium: number;
  min_percentage: string;
  max_percentage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.premiumComputed
    .subscribe (
      (premium: Premium) => {
        this.min_premium = premium.premium / 100;
        this.max_premium = premium.expected_depreciation;
        this.max_percentage = this.precisionRound(premium.expected_depreciation * 100, 2) + '%';
        this.min_percentage = this.precisionRound(this.min_premium / this.max_premium, 2) + '%';
      }
    );
  }

  precisionRound(number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  isValid() {
    return this.min_premium &&  this.max_premium;
  }
}
