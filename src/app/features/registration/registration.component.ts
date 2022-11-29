import { User } from './../../auth/store/auth.facade';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  title = 'registration';

  constructor(private authStateFacade: AuthStateFacade) {}

  ngOnInit(): void {}

  onSubmit(values: User) {
    this.authStateFacade.register(values);
  }
}
