import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';
import { Observable, Subject } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { mockedSkillList } from 'src/mocks/skills/skills.mock';
import { Skill, SkillList } from '../models/skill.model';
import { LocalStorageService } from '../services/local-storage.service';
import { NavbarScrollService } from '../services/navbar-scroll.service';


@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInRightOnEnterAnimation()
  ]
})
export class SkillsComponent implements OnInit {
  skillList: SkillList[] = mockedSkillList;
  show = false;

  constructor(public _localStorageService: LocalStorageService,
    private navbarScrollService: NavbarScrollService) { }

  ngOnInit(): void {
  }

  getVisibility(list: Skill[], index: number): Observable<boolean> {
    if (!this.show) {
      const res = new Subject<boolean>()
      res.next(false);

      return res.asObservable();
    }
    //return await new Promise(() => setTimeout(() => { console.log(list[index].delay);return true }, list[index].delay))
    const result = new Subject<boolean>();
    result.next(true);

    new Observable<boolean>()
      .pipe(first(),
         delay(list[index].delay || 1000))
      .subscribe(data => {
          result.next(true);
          result.complete();
        });
      
    return result.asObservable();

  }

  isShow(state: boolean) {
    this.show = state;
  }

  swipe(index) {
    this.navbarScrollService.changeScrollIndex(index, 750);
  }
}
