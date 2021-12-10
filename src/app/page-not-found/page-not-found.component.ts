import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from 'src/config/languages.config';
import { zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [
    zoomInOnEnterAnimation(),
    zoomOutOnLeaveAnimation()
  ]
})
export class PageNotFoundComponent implements OnInit {
  show = false;
  backgroundVideoSrc = "assets/videos/bg-video.mp4";

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(defaultLanguage);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.show = false;
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
