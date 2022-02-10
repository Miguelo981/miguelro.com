import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  endPoint = "/services/"
  headers: HttpHeaders;
  constructor(private requestService: RequestService) {
  }

  getServices(): Observable<Service[]> {
    return this.requestService.makeGetRequest(this.endPoint);
  }
}
