import { OperationStatus } from './../shared/operation-status.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { routeFadeStateTrigger, routeSlideStateTrigger } from './../../../shared/route-animations';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class PremiumComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  // @HostBinding('@routeSlideState') routeAnimation = true;
  operationProgress = 0;
  public drawerMode = 'side';


  constructor(public authService: AuthService) {}

  ngAfterViewInit() {
    this.checkWindowWidth();
  }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.drawerMode = 'over';
    }
    this.authService.progressUpdated
    .subscribe (
      (status: OperationStatus) => {
        this.operationProgress = status.current;
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < 768) {
        this.drawerMode = 'over';
        this.sidenav.close();
    }
    if (event.target.innerWidth > 768) {
       this.drawerMode = 'side';
       this.sidenav.open();
    }
  }

  public openSideNav() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'push';
      this.sidenav.toggle();
    }
  }

  private checkWindowWidth() {
    if (window.innerWidth < 768) {
      this.sidenav.close();
    }else {
      this.drawerMode = 'side';
      this.sidenav.open();
    }
  }

}
