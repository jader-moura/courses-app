import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() link: string | undefined;
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';

  @Output() onClick = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  emitEvent() {
    if (this.link) {
      this.router.navigate(['/', this.link]);
    } else {
      this.onClick.emit();
    }
  }
}
