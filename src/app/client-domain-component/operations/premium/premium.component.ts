import { OperationStatus } from './../shared/operation-status.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, ViewChild, HostListener  } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  operationProgress = 0;
  public drawerMode = 'side';

  constructor(public authService: AuthService) { }

  ngOnInit() {
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
          this.sidenav.close();
      } else {
        this.drawerMode = 'push';
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

}
