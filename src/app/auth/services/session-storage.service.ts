import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

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
