import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ShareCompDirective } from '../directives/share-comp.directive';

export interface MenuItem {
  label: string;
  icon: string;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
}

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  //@ViewChild('services', { read: LandingPageComponent, static: false }) services;
  //@ViewChild(LandingPageComponent) landing: LandingPageComponent;
  @ContentChild(ShareCompDirective) private sharedDirective: ShareCompDirective;

  menuItems = [
    {
      label: "navbar.routes.services",
      icon: "help",
      scrollToId: "services",
      href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "navbar.routes.projects",
      icon: "help",
      scrollToId: "projects",
      href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "navbar.routes.contactMe",
      icon: "help",
      scrollToId: "contact-me",
      href: "#",
      isButton: true,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  constructor() {}

  menuItems2: MenuItem[] = [
    {
      label: 'navbar.routes',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
  ];

  ngOnInit() {
   }
  
  swipe(index: number, delay?: number) {
    this.sharedDirective.shared.swiperController.swiperRef.slideTo(index, delay || 1000)
  }

}
