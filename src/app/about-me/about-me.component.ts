import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation } from 'angular-animations';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInLeftOnEnterAnimation()
  ]
})
export class AboutMeComponent implements OnInit {
  show = false;
  socialMedias: any[] = [
    {
      href: "https://github.com/Miguelo981",
      icon: "github"
    },
    {
      href: "https://www.linkedin.com/in/miguel-%C3%A1ngel-rodr%C3%ADguez-hernando-a20b27196/",
      icon: "linkedin"
    },
    {
      href: "https://twitter.com/miguelo981",
      icon: "twitter"
    },
    {
      href: "https://t.me/miguelodev",
      icon: "telegram"
    }
  ]

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
