import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarScrollService {
  private scrollToSource = new BehaviorSubject({ index: 0, delay: 1000});
  currentIndex = this.scrollToSource.asObservable();

  constructor() { }

  changeScrollIndex(index: number, delay?: number) {
    this.scrollToSource.next({ index: index, delay: delay || 500 });
  }
}
