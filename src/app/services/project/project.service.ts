import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectThumbnail } from 'src/app/models/project-thumbnail.model';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  endPoint = "/project/"
  headers: HttpHeaders;
  constructor(private requestService: RequestService) {
  }

  getProjects(): Observable<ProjectThumbnail[]> {
    return this.requestService.makeGetRequest(this.endPoint);
  }

  getProjectById(projectId: string): Observable<ProjectThumbnail> {
    return this.requestService.makeGetRequest(this.endPoint + projectId);
  }
}
