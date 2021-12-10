import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  private darkModeSource = new BehaviorSubject(false);
  currentMode = this.darkModeSource.asObservable();

  constructor() { }

  changeDarkMode(state: boolean) {
    this.darkModeSource.next(state);
  }
}
