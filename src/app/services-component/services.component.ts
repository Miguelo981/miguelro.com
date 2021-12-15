import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { LocalStorageService } from '../services/local-storage.service';

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

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
