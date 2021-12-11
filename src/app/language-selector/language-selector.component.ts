import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage, languages } from 'src/config/languages.config';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @ViewChild('swiperController') private swiperController;
  selectedLanguage: string = defaultLanguage;
  languages = languages;
  selectedIndex: number;

  constructor(private translateService: TranslateService) {
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'vertical',
    loop: true,
    navigation: false,
    //pagination: { clickable: true },
    //scrollbar: { draggable: true },
    scrollbar: false,
    mousewheel: true,
    speed: 500
  };

  ngOnInit(): void {
  }

  onSlideChange() {
    if (!this.swiperController.swiperRef) return;

    this.selectedIndex = this.swiperController.swiperRef.realIndex;
    this.selectedLanguage = this.languages[this.selectedIndex];
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  swipe(index) {
    this.swiperController.swiperRef.slideTo(index, 1000);
  }

}
