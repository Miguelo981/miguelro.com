import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { defaultLanguage } from 'src/config/languages.config';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') className = '';
  title = 'miguelo-platform';
  languages = ['es', 'es'];
  selectedLang = defaultLanguage;

  constructor(@Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService,
    private darkModeService: DarkmodeService,
    /* private ccService: NgcCookieConsentService */) {
    this.translateService.addLangs(this.languages);
    this.translateService.setDefaultLang(this.selectedLang);

    this.darkModeService.currentMode.subscribe((darkMode) => {
      const darkClassName = 'dark-mode';
      this.className = darkMode ? darkClassName : '';
      this.document.body.classList.remove(darkClassName);

      if (darkMode) {
        this.document.body.classList.add(darkClassName);
      }
      /* this.overlay.getContainerElement().classList.remove(darkClassName);

      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } */
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

}
