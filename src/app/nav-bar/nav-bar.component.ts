import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { NavbarScrollService } from '../services/navbar-scroll.service';

export interface MenuItem {
  label: string;
 Icon: string;
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

  constructor(private navbarScrollService: NavbarScrollService, private scroller: ViewportScroller, private router: Router, public _localStorageService: LocalStorageService) {
      
  }

  menuItems = [
    {
      label: "navbar.routes.aboutMe",
     Icon: "help",
      scrollToId: "about-me",
      Href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "navbar.routes.services",
     Icon: "help",
      scrollToId: "services",
      Href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "navbar.routes.projects",
     Icon: "help",
      scrollToId: "projects",
      Href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "navbar.routes.testimonials",
     Icon: "help",
      scrollToId: "testimonials",
      Href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: "navbar.routes.contactMe",
     Icon: "help",
      scrollToId: "contact-me",
      Href: "#",
      isButton: true,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  menuItems2: MenuItem[] = [
    {
      label: 'navbar.routes',
     Icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'About',
     Icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Pricing',
     Icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
  ];

  ngOnInit() {}
  
  swipe(index: number, delay?: number) {
    this.navbarScrollService.changeScrollIndex(index, delay);

    //this.sharedDirective.shared.swiperController.swiperRef.slideTo(index, delay || 500)
  }

  scrollTo(id: string) {
    //this.scroller.scrollToAnchor(id);
    this.router.navigate([], { fragment: id });
  }

}
