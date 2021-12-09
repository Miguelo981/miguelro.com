import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from 'src/config/languages.config';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class PageNotFoundComponent implements OnInit {
  show = false;
  backgroundVideoSrc = "assets/videos/bg-video.mp4";

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(defaultLanguage);
  }

  ngOnInit(): void {
    this.show = true;
  }

  ngOnDestroy() {
    this.show = false;
  }

}
