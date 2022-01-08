import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarScrollService } from '../services/navbar-scroll.service';

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

  constructor(private navbarScrollService: NavbarScrollService, private scroller: ViewportScroller, private router: Router) {
      
  }

  menuItems = [
    {
      label: "navbar.routes.aboutMe",
      icon: "help",
      scrollToId: "about-me",
      href: "#",
      isButton: false,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
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
      label: "navbar.routes.testimonials",
      icon: "help",
      scrollToId: "testimonials",
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
