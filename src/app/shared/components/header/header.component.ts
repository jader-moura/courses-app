import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authRoute: boolean = false;

  constructor(public modalService: ModalService, private router: Router) {}

  ngOnInit(): void {
    let currentRoute = window.location.href.split('/').pop();
    if (currentRoute === 'login' || currentRoute === 'registration') {
      this.authRoute = true;
    }
  }

  login() {
    console.log('foi');
    this.modalService.openModal();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
