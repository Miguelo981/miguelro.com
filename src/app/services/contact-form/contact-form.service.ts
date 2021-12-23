import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMeForm } from 'src/app/models/forms/contact-me.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  endPoint = "/contact-form/"
  headers: HttpHeaders;
  constructor(private requestService: RequestService) {
    /* this.headers = new HttpHeaders()
    this.headers = this.headers.append('Authorization',  `X-API-KEY:${'test'}`) //process.env.PROD_X_API_KEY  */
  }

  createForm(form: ContactMeForm): Observable<any> {
    return this.requestService.makePostRequest(this.endPoint, JSON.stringify(form))
  }
}
