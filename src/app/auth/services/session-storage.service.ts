import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(@Inject('Window') private window: Window) {
    // this.window = this.document.defaultView;
  }

  setToken(token: any) {
    this.window?.localStorage.setItem('token', token);
  }
  getToken() {
    return this.window?.localStorage.getItem('token');
  }
  deleteToken() {
    this.window?.localStorage.removeItem('token');
  }
}
