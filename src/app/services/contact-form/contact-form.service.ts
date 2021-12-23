import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactMeForm } from 'src/app/models/forms/contact-me.model';
import { apiHost, apiVersion } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  endPoint = "/contact-form"
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
    this.headers = this.headers.append('Authorization',  `X-API-KEY:${'test'}`) //process.env.PROD_X_API_KEY ||
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*')
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    this.headers = this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-API-TOKEN');
    this.headers = this.headers.append('Content-Type' , 'application/json')
    console.log(this.headers)
  }

  createForm(form: ContactMeForm) {
    this.http.post(apiHost + apiVersion + this.endPoint, JSON.stringify(form), { headers: this.headers })
      .subscribe(response => {
        console.log(response)
      });
  }
}
