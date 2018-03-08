import { routeFadeStateTrigger, routeSlideStateTrigger } from './../../../shared/route-animations';
import { AuthService } from './../auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class LoginComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  // @HostBinding('@routeSlideState') routeAnimation = true;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

}
