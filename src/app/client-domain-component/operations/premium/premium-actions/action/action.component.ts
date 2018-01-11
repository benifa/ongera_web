import { Component, OnInit, Input} from '@angular/core';
import {ActionType} from '../action.type';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Input() actionType: ActionType;
  isMarked = false;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl() {
    switch (this.actionType) {
      default:
      case ActionType.LEARN :
        return '../../../assets/learn-more.png';
      case ActionType.UPLOAD :
        return '../../../assets/upload-data.png';
      case ActionType.PRACTICE :
        return '../../../assets/practice.png';
      case ActionType.CHAT:
        return '../../assets/chat.png';
      case ActionType.EMAIL :
        return '../../../assets/email.png';
    }
  }

  onImageClick() {
    this.isMarked = !this.isMarked;
  }
}
