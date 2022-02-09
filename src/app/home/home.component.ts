import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { first } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
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
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('bgVideo') bgVideo;
  isVideoPlay: boolean;
  show = false;
  backgroundVideoSrc = "assets/videos/bg-video.mp4";

  constructor(private navbarScrollService: NavbarScrollService,
    public _localStorageService: LocalStorageService) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._localStorageService.appData$
    .pipe(first())
    .subscribe(app => {
      this.isVideoPlay = app!.video.isPlay;
      this.pauseOrPlay();
    });
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

  setVideoState(state: boolean) {
    this.isVideoPlay = state;

    this._localStorageService.appData$
      .pipe(first())
      .subscribe(app => {
        this._localStorageService.setInfo({
          language: app!.language,
          theme: app!.theme,
          video: { isPlay: this.isVideoPlay },
          layout: app!.layout,
        });
      });

    this.pauseOrPlay()
  }

  pauseOrPlay(){
    if (this.isVideoPlay) {
      this.bgVideo.nativeElement.pause();
    } else {
      this.bgVideo.nativeElement.muted = true; 
      this.bgVideo.nativeElement.play();
    }
}

}
