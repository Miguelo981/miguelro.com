import { Component, OnInit, ViewChild } from '@angular/core';
import { originalProjectList } from 'src/mocks/projects/projects.mocks';
import SwiperCore, { Mousewheel, SwiperOptions } from 'swiper';
import { ProjectThumbnail } from '../models/project-thumbnail.model';

SwiperCore.use([Mousewheel])

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @ViewChild('projectSwiperController') private projectSwiperController;
  public ctaWaitAmount = 3;
  projectList: ProjectThumbnail[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'vertical',
    navigation: false,
    scrollbar: false,
    mousewheel: true,
    speed: 500
  };

  constructor() {
    this.projectList = [...originalProjectList];

    for (const index of Array(Math.round(this.projectList.length / this.ctaWaitAmount)).keys()) {
      this.projectList.splice(((index+1)*this.ctaWaitAmount)-1, 0, {} as any)
    }
  }

  ngOnInit(): void {
  }

}
