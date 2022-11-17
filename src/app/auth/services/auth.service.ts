import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized: boolean = false;
  authorization: string = '';

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.isAuthorized = this.sessionStorage.getToken() !== null ? true : false;
  }

  login(loginPayload: loginPayloadProps) {
    this.httpClient.post('/login', loginPayload).subscribe(
      (data) => this.sessionStorage.setToken(data),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
    );
  }

  logout() {
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );

    this.httpClient.delete('/logout', { headers: httpHeaders }).subscribe(
      () => this.sessionStorage.deleteToken(),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
    );
  }

  register(registerPayload: registerPayloadProps) {
    this.httpClient.post('/register', registerPayload).subscribe(
      (data) => this.sessionStorage.setToken(data),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
    );
  }
}

interface loginPayloadProps {
  name?: string;
  email: string;
  password: string;
}

interface registerPayloadProps {
  name: string;
  email: string;
  password: string;
}
