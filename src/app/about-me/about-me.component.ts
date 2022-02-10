import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation } from 'angular-animations';
import { first } from 'rxjs/operators';
import { breakPoints } from 'src/config/breakpoints.config';
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
      Href: "https://github.com/Miguelo981",
      icon: "github"
    },
    {
      Href: "https://www.linkedin.com/in/miguel-%C3%A1ngel-rodr%C3%ADguez-hernando-a20b27196/",
      icon: "linkedin"
    },
    /* {
      Href: "https://twitter.com/miguelo981",
      icon: "twitter"
    }, */
    {
      Href: "https://t.me/miguelodev",
      icon: "telegram"
    }
  ]
  lg = breakPoints.lg;

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    /* document.getElementById("about-me")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    }); */
  }

  isShow(state: boolean) {
    this._localStorageService.appData$
      .pipe(first())
      .subscribe(data => {
        this.show = data!.layout.innerWidth >= this.lg ? state : true;
      });
  }
}
