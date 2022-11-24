import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  isAdmin: boolean = false;
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
    private courseService: CoursesService,
    public modalService: ModalService,
    private userStoreService: UserStoreService
  ) {
    this.userStoreService.isAdmin$.subscribe((data) => (this.isAdmin = data));
  }

  openCourse(type: string = '') {
    this.router.navigate([`/course${type}/${this.id}`]);
  }

  openRemoveCourseModal() {
    this.modalService.openModal();
  }

  removeCourse() {
    this.courseService.deleteCourse(this.id);
  }
}
