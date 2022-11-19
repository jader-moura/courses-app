import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  isAdmin: boolean;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() creationDate: string = '';
  @Input() duration: number = 0;
  @Input() authors: string[] = [''];
  @Input() editable: boolean = false;

  constructor(
    private router: Router,
    private userStoreService: UserStoreService
  ) {
    this.isAdmin = this.userStoreService.isAdmin;
  }

  openCourse(type: string = '') {
    this.router.navigate([`/course${type}/${this.id}`]);
  }

  removeCourse() {}
}
