import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login';

  constructor(
    private authService: AuthService,
    private sessionStorage: SessionStorageService
  ) {}

  onSubmit(values: any) {
    this.authService.login(values).subscribe(
      ({ result }: any) => {
        this.sessionStorage.setToken(result);
        window.location.href = '/courses';
      },
      (err: HttpErrorResponse) => console.error(`Got error: ${err}`)
    );
  }
}
