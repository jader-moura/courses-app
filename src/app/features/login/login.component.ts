import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login';
  constructor() {}

  onSubmit(values: any) {
    console.log(values);
  }
}
