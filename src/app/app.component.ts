import { AuthService } from './client-domain-component/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  companyName: string;

  constructor (private route: ActivatedRoute, private authService: AuthService) {}

   ngOnInit() {
   }
}
