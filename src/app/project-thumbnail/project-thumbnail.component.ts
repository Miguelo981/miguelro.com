import { Component, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { EffectFade, Navigation, Pagination, SwiperOptions } from 'swiper';
import { ProjectThumbnail } from '../models/project-thumbnail.model';

SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: 'project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.scss']
})
export class ProjectThumbnailComponent implements OnInit {
  @Input() projectThumbnail: ProjectThumbnail;
  @ViewChild('projectSwiperController') private projectSwiperController;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: false,
    speed: 500
  };

  constructor() { }

  ngOnInit(): void {
  }

}
