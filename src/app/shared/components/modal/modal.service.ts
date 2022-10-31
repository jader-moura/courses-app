import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modalActive: boolean = false;

  constructor() {}

  closeModal() {
    this.modalActive = false;
  }

  openModal() {
    this.modalActive = true;
  }
}
