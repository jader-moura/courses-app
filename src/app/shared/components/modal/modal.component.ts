import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() okButtonText: string = '';
  @Input() cancelButtonText: string = '';

  @Output() callback = new EventEmitter();

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalService.closeModal();
  }

  runCallback() {
    this.callback.emit();
    this.closeModal();
  }
}
