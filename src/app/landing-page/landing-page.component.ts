import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { SEOMetaTags } from '../models/interfaces/seo-meta-tags.interface';
import * as moment from 'moment';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, SEOMetaTags {
  isLoading = true;

  constructor(private router: Router,
    private translate: TranslateService,
    private canonicalService: CanonicalService,
    private metaTagService: Meta,
    private titleService: Title) {
    
      this.insertSEOMetaTags();
      this.canonicalService.setCanonicalURL();

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

  insertSEOMetaTags(): void {
    this.translate.get('meta')
      .pipe(first())
      .subscribe((data:any)=> {
        this.titleService.setTitle('Miguelo Dev'); // Route data

        this.metaTagService.addTags([
          { name: 'keywords', content: data.keywords.join(",") },
          { name: 'robots', content: 'index, follow' },
          { name: 'author', content: 'Miguel Ángel Rodríguez' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'date', content: moment(new Date()).format('YYYY-MM-DD'), scheme: 'YYYY-MM-DD' },
          { name: 'description', content: data.description },
          { charset: 'UTF-8' }
        ]);
      });
  }

}
