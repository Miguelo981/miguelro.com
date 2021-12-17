import { Component, OnInit } from '@angular/core';
import {  fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { LocalStorageService } from '../services/local-storage.service';

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
  services = [
    {
      title: "services.services.webDev.title",
      description: "services.services.webDev.description",
      icon: "code",
    },
    {
      title: "services.services.apiDev.title",
      description: "services.services.apiDev.description",
      icon: "database",
    },
    {
      title: "services.services.responsiveDev.title",
      description: "services.services.responsiveDev.description",
      icon: "mobile",
    },
    {
      title: "services.services.webDev.title",
      description: "services.services.webDev.description",
      icon: "code",
    },
    {
      title: "services.services.apiDev.title",
      description: "services.services.apiDev.description",
      icon: "database",
    },
    {
      title: "services.services.responsiveDev.title",
      description: "services.services.responsiveDev.description",
      icon: "mobile",
    },
  ]

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
