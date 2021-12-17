import { Component, OnInit } from '@angular/core';
import { zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    zoomInOnEnterAnimation(),
    zoomOutOnLeaveAnimation()
  ]
})
export class TestimonialsComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.show = false;
  }

  isShow(state: boolean) {
    this.show = state;
  }

}
