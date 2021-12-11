import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { NavbarScrollService } from '../services/navbar-scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInLeftOnEnterAnimation(),
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  show = false;
  backgroundVideoSrc = "assets/videos/bg-video.mp4";

  constructor(private navbarScrollService: NavbarScrollService) {
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.show = false;
  }

  isShow(state: boolean) {
    /* new Promise( () => setTimeout(() => {
      console.log(state)
      this.show = state;
    }, 1500) ); */
    this.show = state;
  }

  swipe(index) {
    this.navbarScrollService.changeScrollIndex(index, 750);
  }

}
