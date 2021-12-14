import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';
import { Observable, Subject } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { dbs, frameworks, programmingLanguages, programs } from 'src/mocks/skills/skills.mock';
import { Skill } from '../models/skill.model';

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
  programmingLanguages: Skill[] = programmingLanguages;
  frameworks: Skill[] = frameworks;
  programs: Skill[] = programs;
  dbs: Skill[] = dbs;
  show = false;

  constructor() { }

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
        console.log(data)
          result.next(true);
          result.complete();
        });
      
    return result.asObservable();

  }

  isShow(state: boolean) {
    this.show = state;
  }
}