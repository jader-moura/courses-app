import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authRoute: boolean = false;

  constructor(public modalService: ModalService) {}

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
}
