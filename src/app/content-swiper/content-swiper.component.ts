import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from 'src/config/languages.config';
import SwiperCore, { Mousewheel, SwiperOptions } from 'swiper';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { NavbarScrollService } from '../services/navbar-scroll.service';

SwiperCore.use([Mousewheel]);

@Component({
  selector: 'content-swiper',
  templateUrl: './content-swiper.component.html',
  styleUrls: ['./content-swiper.component.scss']
})
export class ContentSwiperComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperController', { static: false }) private swiperController;
  private sub;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'vertical',
    navigation: false,
    //pagination: { clickable: true },
    //scrollbar: { draggable: true },
    scrollbar: false,
    mousewheel: true,
    speed: 500
  };

  landingComponents = [
    {
      component: HomeComponent,
    },
    {
      component: PageNotFoundComponent,
    },
    {
      component: PageNotFoundComponent,
    },
    {
      component: PageNotFoundComponent,
    }
  ]

  constructor(private translateService: TranslateService,
    private route: ActivatedRoute,
    private navbarScrollService: NavbarScrollService) {

    this.sub = this.route.params
      .subscribe(params => {
        this.translateService.setDefaultLang(params['lang'] || defaultLanguage);
      });
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navbarScrollService.currentIndex
    .subscribe(index => {
      this.swiperController.swiperRef.slideTo(index.index, index.delay);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}