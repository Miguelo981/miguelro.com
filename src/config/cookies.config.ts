import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from 'src/environments/environment';

export const cookieConfig: NgcCookieConsentConfig = {
    cookie: {
      domain: environment.cookieDomain // or 'your.domain.com'
    },
    palette: {
      popup: {
        background: '#000'
      },
      button: {
        background: '#f1d600'
      }
    },
    theme: 'edgeless',
    type: 'opt-out'
  };
  