import { Component, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade, Pagination, SwiperOptions } from 'swiper';
import { ProjectThumbnail } from '../models/project-thumbnail.model';

SwiperCore.use([EffectFade, Pagination, Autoplay]);

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
    navigation: false,
    autoplay: { delay: 5000 },
    pagination: { clickable: true },
    scrollbar: false,
    speed: 500
  };

  constructor() { }

  ngOnInit(): void {
  }

}
