import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation } from 'angular-animations';

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

  constructor() { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
