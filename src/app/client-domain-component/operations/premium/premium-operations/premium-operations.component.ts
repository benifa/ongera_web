import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-premium-operations',
  templateUrl: './premium-operations.component.html',
  styleUrls: ['./premium-operations.component.css']
})
export class PremiumOperationsComponent implements OnInit {
  @Output() sideNavOpened = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit() {
  }

  public openSideNav() {
    this.sideNavOpened.emit(true);
  }

}
