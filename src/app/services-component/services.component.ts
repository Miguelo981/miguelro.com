import { Component, OnInit } from '@angular/core';
import {  fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { breakPoints } from 'src/config/breakpoints.config';
import { services } from 'src/mocks/services/services.mock';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { LocalStorageService } from '../services/local-storage.service';
import { ServiceService } from '../services/services/service.service';

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
  servicesList = services;
  lg = breakPoints.lg;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    //navigation: true,
    pagination: { clickable: true },
    speed: 500
  };

  constructor(public _localStorageService: LocalStorageService,
    private servicesService: ServiceService) {
      this.getServices();
    }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

  getCols() {
    return [...Array(this.servicesList.length / 2).keys()];
  }

  getServices() {
    this.servicesService
      .getServices()
      .subscribe(data => {
        this.servicesList = data;
      });
  }

}
