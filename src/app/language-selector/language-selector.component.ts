import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage, languages } from 'src/config/languages.config';
import { SwiperOptions } from 'swiper';
import { LocalStorageService } from '../services/local-storage.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperController') private swiperController;
  selectedLanguage: string = defaultLanguage;
  languages = languages;
  selectedIndex: number;

  constructor(private _localStorageService: LocalStorageService) {
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

  ngAfterViewInit(): void {
    this._localStorageService.appData$
      .pipe(first())
      .subscribe(app => {
        this.swipe(languages.indexOf(app!.language.lang) +1);
      });
  }

  onSlideChange() {
    if (!this.swiperController.swiperRef) return;

    this.selectedIndex = this.swiperController.swiperRef.realIndex;
    this.selectedLanguage = this.languages[this.selectedIndex];

    this._localStorageService.appData$
      .pipe(first())
      .subscribe(app => {
        this._localStorageService.setInfo({
          language: { lang: this.selectedLanguage },
          theme: app!.theme,
          video: app!.video
        });
      });
  }

  swipe(index) {
    this.swiperController.swiperRef.slideTo(index, 1000);
  }

}
