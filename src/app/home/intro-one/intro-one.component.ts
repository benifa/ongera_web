import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  buyEgret() {
    window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
  }
  getNGLanding() {
    window.open('');
  }

  loadDemo() {
    this.router.navigate([ '/bk']);
  }
}
