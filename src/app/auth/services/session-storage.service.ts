import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(@Inject('Window') public window: Window) {}

  setToken(token: any) {
    window.localStorage.setItem('token', token);
  }
  getToken() {
    return window.localStorage.getItem('token');
  }
  deleteToken() {
    window.localStorage.removeItem('token');
  }
}
