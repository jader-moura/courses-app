import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  login() {
    console.log('foi');
    this.modalService.openModal();
  }
}
