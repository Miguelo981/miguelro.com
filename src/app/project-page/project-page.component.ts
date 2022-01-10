import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { originalProjectList } from 'src/mocks/projects/projects.mocks';
import { ProjectThumbnail } from '../models/project-thumbnail.model';
import { LocalStorageService } from '../services/local-storage.service';
import { ProjectService } from '../services/project/project.service';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectId: string | null;
  selectedProject: ProjectThumbnail;

  constructor(private route: ActivatedRoute,
    public _localStorageService: LocalStorageService,
    private projectService: ProjectService) {
    this.projectId = this.route.snapshot.paramMap.get('id');
    const lang = this.route.snapshot.paramMap.get('lang');

    if (lang) {
      this._localStorageService.appData$
        .pipe(first())
        .subscribe(app => {
          this._localStorageService.setInfo({
            language: { lang: lang },
            theme: app!.theme,
            video: app!.video,
            layout: app!.layout,
          });
        });
    }
    
    this.selectedProject = originalProjectList[Number(this.projectId)];
    this.getProject();
  }

  ngOnInit(): void {
  }

  getProject() {
    this.projectService.getProjectById(this.projectId!)
      .subscribe(data => {
        this.selectedProject = data;
      });
  }

}
