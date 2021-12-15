import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation } from 'angular-animations';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInLeftOnEnterAnimation()
  ]
})
export class AboutMeComponent implements OnInit {
  show = false;

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
