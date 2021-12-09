import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInAnimation, fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

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

  constructor() {
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

}
