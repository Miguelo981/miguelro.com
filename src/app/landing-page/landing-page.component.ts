import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from 'src/config/languages.config';

import SwiperCore, { Mousewheel, SwiperOptions } from 'swiper';

SwiperCore.use([Mousewheel]);

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperController', { static: false }) private swiperController;
  private sub;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'vertical',
    navigation: false,
    //pagination: { clickable: true },
    scrollbar: { draggable: true },
    mousewheel: true,
  };

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor(private translateService: TranslateService,
    private route: ActivatedRoute) {

    this.sub = this.route.params
      .subscribe(params => {
        this.translateService.setDefaultLang(params['lang'] || defaultLanguage);
      });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.swiperController);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
