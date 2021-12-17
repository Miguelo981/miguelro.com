import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
  
  getYear() {
    return new Date().getFullYear();
  }

}
