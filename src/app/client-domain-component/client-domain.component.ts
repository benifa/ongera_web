import { AuthService } from './auth/auth.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-domain',
  templateUrl: './client-domain.component.html',
  styleUrls: ['./client-domain.component.css']
})
export class ClientDomainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

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
