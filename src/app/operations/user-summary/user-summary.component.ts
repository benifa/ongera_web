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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getUserInfo();
    this.currentUser = new User(user.firstname, user.lastname, user.username, user.company, user.time_since_last_login)
  }

}
