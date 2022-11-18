import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  LoginPayloadProps,
  RegisterPayloadProps,
} from 'src/app/shared/dtos/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorized: boolean = false;
  authorization: string = '';

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.isAuthorized = this.sessionStorage.getToken() !== null ? true : false;
  }

  login(loginPayload: LoginPayloadProps) {
    this.httpClient.post('http://localhost:4000/login', loginPayload).subscribe(
      ({ result }: any) => this.sessionStorage.setToken(result),
      (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
    );
  }

  logout() {
    let httpHeaders = new HttpHeaders().set(
      'Authorization',
      this.sessionStorage.getToken() || ''
    );

    this.httpClient
      .delete('http://localhost:4000/logout', { headers: httpHeaders })
      .subscribe(
        () => this.sessionStorage.deleteToken(),
        (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
      );
  }

  register(registerPayload: RegisterPayloadProps) {
    this.httpClient
      .post('http://localhost:4000/register', registerPayload)
      .subscribe(
        ({ successful }: any) => {
          if (successful) {
            alert('Account created with success, please login');
          }
          this.router.navigate(['/login']);
        },
        (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
      );
  }
}
