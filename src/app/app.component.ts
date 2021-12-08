import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from 'src/config/languages.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miguelo-platform';
  languages = ['es', 'es'];
  selectedLang = defaultLanguage;

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.languages);
    this.translateService.setDefaultLang(this.selectedLang);
  }

}
