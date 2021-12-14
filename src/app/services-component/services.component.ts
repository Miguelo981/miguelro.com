import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInLeftOnEnterAnimation(),
  ],
})
export class ServicesComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
