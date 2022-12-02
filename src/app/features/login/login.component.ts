import { Component, OnInit } from '@angular/core';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'login';

  constructor(private authStateFacade: AuthStateFacade) {}

  ngOnInit(): void {}

  onSubmit({ email, password }: any) {
    this.authStateFacade.login({ email, password });
  }
}
