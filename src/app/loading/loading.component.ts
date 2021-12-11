import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { bounceIn } from 'ng-animate';
import { Teximate, TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit {
  @ViewChild(Teximate) teximate: Teximate;
  @Input() show: boolean = true;

  private inAnimation: TextAnimation = {
    id: 'enter-animation',
    animation: bounceIn,
    delay: 50,
    type: 'letter'
  };

  private outAnimation: TextAnimation = {
    id: 'leave-animation',
    animation: bounceIn,
    delay: 50,
    type: 'letter'
  };

  constructor() {
  }

  ngAfterViewInit() {
    this.playEnterAnimation(this.inAnimation);
    //this.playLeaveAnimation(outAnimation);
  }

  playEnterAnimation = (inAnimation) => {
    new Promise( () => setTimeout(() => {
      if (this.show) {
        this.teximate.registerAnimation(inAnimation);
        this.teximate.players.get('enter-animation')!.play();
      }
      
      this.playEnterAnimation(inAnimation);
    }, 1500) );
  }

  playLeaveAnimation = (outAnimation) => {
    new Promise( () => setTimeout(() => {
      this.teximate.registerAnimation(outAnimation);
      this.teximate.players.get('leave-animation')!.play();
      this.playEnterAnimation(outAnimation);
    }, 4500) );
  }

}
