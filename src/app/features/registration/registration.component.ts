import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  title = 'registration';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(values: any) {
    console.log(values);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
