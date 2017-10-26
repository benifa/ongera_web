import { AuthService } from './../../auth.service';
import { User } from './../../../user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css'],
  animations:
  [
    trigger('CurveState',
    [state('normal', style({ transform: 'translateY(300px) translateX(-300px) scale(0.01)' })),
    transition('void <=> normal', animate(1500))
    ]
  ),
  trigger('FadeState',
    [state('normal', style({ transform: 'scale(1.1)' })),
    transition('void <=> normal', animate(1500))
    ]
  )
  ]
})
export class LoginSuccessComponent implements OnInit {
  state = 'normal';
  currentUser: User;
  date: Date;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getUserInfo();
  }

  animationDone(event: Event) {
    this.router.navigate([this.authService.getClientId() + '/operations']);
  }

}
