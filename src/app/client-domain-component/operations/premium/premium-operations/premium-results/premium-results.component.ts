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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.premiumComputed
    .subscribe (
      (premium: Premium) => {
        this.min_premium = premium.premium / 100;
        this.max_premium = premium.expected_depreciation;
      }
    );
  }

}
