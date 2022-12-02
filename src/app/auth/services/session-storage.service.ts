import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(@Inject('Window') private window: Window) {}

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
