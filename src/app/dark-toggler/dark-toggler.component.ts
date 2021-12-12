import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { first } from "rxjs/operators";
import { FormControl } from '@angular/forms';
import { DarkmodeService } from '../services/darkmode.service';

@Component({
  selector: 'dark-toggler',
  templateUrl: './dark-toggler.component.html',
  styleUrls: ['./dark-toggler.component.scss']
})
export class DarkTogglerComponent implements OnInit {
  toggleControl: FormControl;

  constructor(private _localStorageService: LocalStorageService,
    private darkModeService: DarkmodeService) {
    
    this._localStorageService.appData$
      .pipe(first())
      .subscribe(app => {
        this.toggleControl = new FormControl(app?.theme.isDark);

        this.toggleControl.valueChanges
          .subscribe((darkMode) => {
            this.darkModeService.changeDarkMode(darkMode);
          });
      });
  }

  ngOnInit(): void {
  }

}
