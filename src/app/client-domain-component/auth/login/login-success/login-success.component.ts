import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css'],
  animations:
  [trigger('loggedIn',
    [state('normal', style({ transform: 'translateY(300px) translateX(-300px) scale(0.01)' })),
      transition('void <=> normal', animate(1500))
    ]
  )]
})
export class LoginSuccessComponent implements OnInit {
  state = 'normal';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  animationDone(event: Event) {
  this.router.navigate([this.authService.getClientId() + '/operations']);
  }

}
