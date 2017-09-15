import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

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
