import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CardComponent implements OnInit {
  courseDuration: string = '';

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() creationDate: string = '';
  @Input() duration: number = 0;
  @Input() authors: string[] = [''];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.courseDuration = `${Math.floor(this.duration / 60)}:${
      this.duration % 60
    } hours`;
  }

  openCourse() {
    this.router.navigate(['/course']);
  }
}
