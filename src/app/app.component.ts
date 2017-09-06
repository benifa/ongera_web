import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './auth/auth.service';

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
     this.route.params
     .subscribe(
       (params: Params) => {
         const client = params['id'];
         this.authService.setClientId(client);
       }
     );
   }
}
