import { OperationStatus } from './../shared/operation-status.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  operationProgress = 0;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.progressUpdated
    .subscribe (
      (status: OperationStatus) => {
        this.operationProgress = status.current;
      }
    );
  }

}
