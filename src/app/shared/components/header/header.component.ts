import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public modalService: ModalService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log('foi');
    this.modalService.openModal();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
