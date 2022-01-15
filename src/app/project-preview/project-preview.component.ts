import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { breakPoints } from 'src/config/breakpoints.config';
import SwiperCore, { SwiperOptions } from 'swiper';
import { ProjectThumbnail } from '../models/project-thumbnail.model';
import { LocalStorageService } from '../services/local-storage.service';
import { ProjectService } from '../services/project/project.service';

SwiperCore.use([]);

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ],
})
export class ProjectPreviewComponent implements OnInit {
  @ViewChild('swiperController', { static: false }) private swiperController;
  show = false;
  projectLists: ProjectThumbnail[] = [];
  md = breakPoints.md;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    navigation: false,
    pagination: { clickable: true },
    allowTouchMove: false,
    scrollbar: false,
    speed: 500
  };

  constructor(private projectService: ProjectService,
    public _localStorageService: LocalStorageService) {
    //this.projectLists = [...projectList];
    this.getProjects();
  }

  ngOnInit(): void {
  }

  isShow(state: boolean) {
    this.show = state;
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe(data => {
        this.projectLists = data;
      });
  }

}
