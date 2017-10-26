import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

  constructor(private route: ActivatedRoute, private authService: AuthService) { }
  ngOnInit() {
  }

}
