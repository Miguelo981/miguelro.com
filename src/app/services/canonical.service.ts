import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(@Inject(DOCUMENT) private document) { }

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.document.URL : url;
    const link: HTMLLinkElement = this.document.createElement('link');
    
    link.setAttribute('rel', 'canonical');
    this.document.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

}
