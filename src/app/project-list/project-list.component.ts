import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { originalProjectList } from 'src/mocks/projects/projects.mocks';
import SwiperCore, { Mousewheel, SwiperOptions } from 'swiper';
import { ProjectThumbnail } from '../models/project-thumbnail.model';
import { NavbarScrollService } from '../services/navbar-scroll.service';

SwiperCore.use([Mousewheel, ])

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  @ViewChild('projectSwiperController') private projectSwiperController;
  public ctaWaitAmount = 4;
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
  
  constructor(private navbarScrollService: NavbarScrollService) {
    this.projectList = [...originalProjectList];
    
    for (const index of Array(Math.round(this.projectList.length / this.ctaWaitAmount)).keys()) {
      this.projectList.splice(((index+1)*this.ctaWaitAmount)-1, 0, {} as any)
    }
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navbarScrollService.currentIndex
    .subscribe(index => {
      if (index.index === 3) return;
      
      this.projectSwiperController.swiperRef.slideTo(0, 1000);
    });
  }

}
