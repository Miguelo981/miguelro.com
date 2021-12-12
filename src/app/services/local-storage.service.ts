import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppData } from '../models/storage.model';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage: Storage;
  private _appData$ = new BehaviorSubject<AppData | null>(null);
  public appData$ = this._appData$.asObservable();

  constructor(private _localStorageRefService: LocalStorageRefService) {
     this._localStorage = this._localStorageRefService.localStorage;
  }

  setInfo(data: AppData) {
    const jsonData = JSON.stringify(data);
    this._localStorage.setItem('app', jsonData);
    this._appData$.next(data);
 }

 loadInfo() {
    const data = JSON.parse(this._localStorage.getItem('app') || '{}');
    this._appData$.next(data);
 }

 clearInfo() {
    this._localStorage.removeItem('app');
    this._appData$.next(null);
 }

 clearAllLocalStorage() {
    this._localStorage.clear();
    this._appData$.next(null);
 }
}