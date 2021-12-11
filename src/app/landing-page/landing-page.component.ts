import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isLoading = true;

  constructor(private router: Router) {

    this.router.events
      .subscribe((event) => {
        this.navigationInterceptor(event)
      })
  }
  ngOnInit(): void {
  }

  /* ngAfterViewInit(): void {
    console.log("FINISHING LOADING")
    this.isLoading = false;
  } */

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (event instanceof NavigationError || event instanceof NavigationCancel || event instanceof NavigationEnd) {
      new Promise( () => setTimeout(() => {
        this.isLoading = false;
      }, 2000) );
    }
  }

}
