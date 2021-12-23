import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiHost, apiVersion } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  host = apiHost + apiVersion;

  constructor(private _http: HttpClient) { }

  makeGetRequest(path: string): Observable<any> {
      try {
          return this._http.get(this.host + path);
      } catch (e: any) {
          return e.response.data
      }
  }

  makePostRequest(path: string, payload?: any): Observable<any> {
      try {
          return this._http.post(this.host + path, payload);
      } catch (e: any) {
          return e.response.data
      }
  }

  makePutRequest(path: string, payload?: any): Observable<any | boolean> {
      try {
          return this._http.put(this.host + path, payload);
      } catch (e: any) {
          return e.response.data
      }
  }

  makePatchRequest(path: string, payload?: any): Observable<any | boolean> {
      try {
          return this._http.patch(this.host + path, payload);
      } catch (e: any) {
          return e.response.data
      }
  }

  makeDeleteRequest(path: string): Observable<any | boolean> {
      try {
          return this._http.delete(this.host + path);
      } catch (e: any) {
          return e.response.data
      }
  }
}
