import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private location: PlatformLocation) { }

  ngOnInit() {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.authService.logout();
  }

}
