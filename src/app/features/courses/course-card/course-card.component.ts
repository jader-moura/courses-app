import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { CoursesService } from 'src/app/services/courses.service';
import { UserStateFacade } from 'src/app/user/store/user.facade';

@Component({
  selector: 'app-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  isAdmin$ = this.userFacade.isAdmin$;
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
    public userFacade: UserStateFacade
  ) {}

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
