import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwiperModule } from 'swiper/angular';
//import { NgcCookieConsentModule } from 'ngx-cookieconsent';
//import { cookieConfig } from 'src/config/cookies.config';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactDialog } from './dialogs/contact.dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TeximateModule } from 'ngx-teximate';
import { MaterialModule } from 'src/config/material.module';
import { NguiInviewModule } from '@ngui/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { ContentSwiperComponent } from './content-swiper/content-swiper.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LoadingComponent } from './loading/loading.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { DarkTogglerComponent } from './dark-toggler/dark-toggler.component';
import { ProjectThumbnailComponent } from './project-thumbnail/project-thumbnail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CtaComponent } from './cta/cta.component';
import { ServicesComponent } from './services-component/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SkillsComponent } from './skills/skills.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { LastActionComponent } from './last-action/last-action.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContentSwiperComponent,
    ContactMeComponent,
    ContactDialog,
    LoadingComponent,
    LanguageSelectorComponent,
    DarkTogglerComponent,
    ProjectThumbnailComponent,
    ProjectListComponent,
    CtaComponent,
    ServicesComponent,
    TestimonialsComponent,
    SkillsComponent,
    NewsletterComponent,
    AboutMeComponent,
    ScrollToTopComponent,
    FooterComponent,
    LastActionComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SwiperModule,
    BrowserAnimationsModule,
    TeximateModule,
    NguiInviewModule,
    LazyLoadImageModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    //NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    ContactDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}