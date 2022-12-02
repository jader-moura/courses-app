import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login';

  constructor(private authService: AuthService) {}

  onSubmit(values: any) {
    this.authService.login(values);
  }
}
