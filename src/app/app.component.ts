import { DOCUMENT, Location } from '@angular/common';
import { Component, HostBinding, HostListener, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { defaultLanguage, languages } from 'src/config/languages.config';
import { DarkmodeService } from './services/darkmode.service';
import { LocalStorageService } from './services/local-storage.service';
import { first, skip } from 'rxjs/operators';
import { defaultLocalStorage } from 'src/config/storage.config';
import { googleAnalytiscscripts } from 'src/config/google/google-analytics.config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') className = '';

  innerWidth: number;
  title = 'miguelo-platform';
  selectedLang = defaultLanguage;
  

  constructor(@Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService,
    private darkModeService: DarkmodeService,
    private _localStorageService: LocalStorageService,
    private location: Location,
    /* private ccService: NgcCookieConsentService */) {
      this.insertGoogleAnalyticsScript();
    this._localStorageService.loadInfo();
    this._localStorageService.appData$
      .pipe(first())
      .subscribe(app => {
        if (app === null || !app!.language || !app!.layout || !app!.theme || !app!.video) {
        this._localStorageService.setInfo(defaultLocalStorage);
        }

        this.setThemeClass(app!.theme.isDark);
      });
    
    this.translateService.addLangs(languages);

    this._localStorageService.appData$
      .subscribe(app => {
        this.translateService.setDefaultLang(app!.language.lang);
        this.location.replaceState("/"+app!.language.lang);
      });

    this.darkModeService.currentMode
      .pipe(skip(1))
      .subscribe((darkMode) => {
        this.setThemeClass(darkMode);

        this._localStorageService.appData$
          .pipe(first())
          .subscribe(app => {
            this._localStorageService.setInfo({
              language: app!.language,
              theme: { isDark: darkMode },
              video: app!.video,
              layout: app!.layout,
            });
          });
      });

    /* this.translateService
      .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
      .subscribe(data => {

        console.log(this.ccService, data)

        this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
        // Override default messages with the translated ones
                
        this.ccService.getConfig().content!.header = data['cookie.header'];
        this.ccService.getConfig().content!.message = data['cookie.message'];
        this.ccService.getConfig().content!.dismiss = data['cookie.dismiss'];
        this.ccService.getConfig().content!.allow = data['cookie.allow'];
        this.ccService.getConfig().content!.deny = data['cookie.deny'];
        this.ccService.getConfig().content!.link = data['cookie.link'];
        this.ccService.getConfig().content!.policy = data['cookie.policy'];

        this.ccService.destroy(); // remove previous cookie bar (with default messages)
        this.ccService.init(this.ccService.getConfig()); // update config with translated messages
      }); */
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    this._localStorageService.appData$
      .pipe(first())
      .subscribe(app => {
        this._localStorageService.setInfo({
          language: app!.language,
          theme: app!.theme,
          video: app!.video,
          layout: { innerWidth: this.innerWidth },
        });
      });
  }

  setThemeClass(darkMode: boolean) {
    const darkClassName = 'dark-mode';
    this.className = darkMode ? darkClassName : '';
    this.document.body.classList.remove(darkClassName);

    if (darkMode) {
      this.document.body.classList.add(darkClassName);
    }
  }

  insertGoogleAnalyticsScript() {
    if (!environment.production) return;

    googleAnalytiscscripts.forEach(script => this.document.head.appendChild(script));
  }

}
