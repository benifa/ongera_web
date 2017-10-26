import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
  animations:
  [
    trigger('LogoutFadeState',
    [
      state('animate', style({ transform: 'scale(1.1)' })),
      transition('normal => animate', animate(1500))
    ]
  ),
  ]
})

export class OperationsComponent implements OnInit {
  state = 'normal';
  logout = false ;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
   this.logout = true;
   this.state = 'animate';
  }

  animateLogout (event: Event) {
    this.authService.logout();
  }

}
