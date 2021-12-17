import { Component, OnInit } from '@angular/core';
import {  fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { breakPoints } from 'src/config/breakpoints.config';
import { services } from 'src/mocks/services/services.mock';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { LocalStorageService } from '../services/local-storage.service';

SwiperCore.use([Navigation]);

@Component({
  selector: 'services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ],
})
export class ServicesComponent implements OnInit {
  show = false;
  services = services;
  md = breakPoints.md;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    //navigation: true,
    pagination: { clickable: true },
    speed: 500
  };

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

  getCols() {
    return [...Array(services.length / 2).keys()];
  }

}
