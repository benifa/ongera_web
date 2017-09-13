import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
  currentUser: User;
  today: Date;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.today = new Date();
    this.currentUser = this.authService.getUserInfo();
  }

}
