import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  courseDuration: string = '';

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() creationDate: string = '';
  @Input() duration: number = 0;
  @Input() authors: string[] = [''];

  constructor() {}

  ngOnInit(): void {
    this.courseDuration = `${Math.floor(this.duration / 60)}:${
      this.duration % 60
    } hours`;
  }

  openCourse() {
    alert(`Open course ID: ${this.id}`);
  }
}
