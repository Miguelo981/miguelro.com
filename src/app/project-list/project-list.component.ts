import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { originalProjectList } from 'src/mocks/projects/projects.mocks';
import SwiperCore, { Mousewheel, Pagination, SwiperOptions } from 'swiper';
import { SEOMetaTags } from '../models/interfaces/seo-meta-tags.interface';
import { ProjectThumbnail } from '../models/project-thumbnail.model';
import { NavbarScrollService } from '../services/navbar-scroll.service';

SwiperCore.use([Mousewheel, Pagination])

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit, SEOMetaTags {
  @ViewChild('projectSwiperController') private projectSwiperController;
  public ctaWaitAmount = 4;
  projectList: ProjectThumbnail[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'vertical',
    allowTouchMove: false,
    pagination: true,
    navigation: false,
    scrollbar: false,
    mousewheel: true,
    speed: 500
  };
  
  constructor(private navbarScrollService: NavbarScrollService,
    private translateService: TranslateService,
    private titleService: Title,
    private metaTagService: Meta) {
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

  insertSEOMetaTags(): void {
    this.translateService.get('meta.projectList')
      .pipe(first())
      .subscribe((data:any)=> {
        this.titleService.setTitle(data.title); // Route data

        this.metaTagService.addTags([
          { name: 'keywords', content: data.keywords.join(",") },
          { name: 'robots', content: 'index, follow' },
          { name: 'author', content: 'Miguel Ángel Rodríguez' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'date', content: moment(new Date()).format('YYYY-MM-DD'), scheme: 'YYYY-MM-DD' },
          { name: 'description', content: data.description },
          { charset: 'UTF-8' }
        ]);
      });
  }

}
