import { Component, OnInit } from '@angular/core';
import {ActionType} from './action.type';

@Component({
  selector: 'app-premium-actions',
  templateUrl: './premium-actions.component.html',
  styleUrls: ['./premium-actions.component.css']
})
export class PremiumActionsComponent implements OnInit {
  verticalActions: String[] = [ActionType.LEARN, ActionType.UPLOAD, ActionType.PRACTICE];
  horizontalActions: String[] = [ActionType.EMAIL, ActionType.CHAT];
  selectedAction: ActionType;
  constructor() { }

  ngOnInit() {
  }

  onImageClick(action) {
    this.selectedAction = action ;
  }

}
