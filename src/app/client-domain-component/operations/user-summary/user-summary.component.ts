import { User } from './../../user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css'],
  animations:
  [
    trigger('FadeState',
    [state('normal', style({ transform: 'scale(1.1)' })),
    transition('void <=> normal', animate(1500))
    ]
  )
  ]
})
export class UserSummaryComponent implements OnInit {
  currentUser: User;
  today: Date;
  state;
  time$ = Observable
    .interval(1000)
    .map(val => new Date());

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.today = new Date();
    this.state = 'normal';
    this.currentUser = this.authService.getUserInfo();
  }

  logout() {
    this.authService.logout();
  }

}
