import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  title = 'registration';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(values: any) {
    this.authService.register(values);
  }
}
