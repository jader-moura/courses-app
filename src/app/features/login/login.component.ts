import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login';
  constructor(private router: Router) {}

  onSubmit(values: any) {
    console.log(values);
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
