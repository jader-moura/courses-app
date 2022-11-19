import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from 'src/app/services/courses.service';
import { CourseProps } from 'src/app/shared/dtos/courses';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  form!: FormGroup;
  faTimes = faTimes;
  formType: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}
  ngOnInit(): void {
    this.route.url.subscribe((url: any) => {
      this.formType = url[0].path;
    });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl(null, this.durationValidator),
      authors: new FormArray([]),
      newAuthor: new FormControl(
        '',
        Validators.compose([Validators.pattern('^[A-Za-z0-9]+$')])
      ),
    });
  }

  addAuthor(authorName: string) {
    if (!this.form.get('newAuthor')?.errors) {
      (<FormArray>this.form.controls['authors']).push(
        new FormControl(authorName)
      );
      this.form.get('newAuthor')?.setValue('');
      this.form.get('newAuthor')?.markAsUntouched();
    }
  }

  removeAuthor(authorIndex: number) {
    (<FormArray>this.form.controls['authors']).removeAt(authorIndex);
  }

  onSubmit(value: CourseProps) {
    if (this.formType === 'add') {
      this.coursesService.createCourse(value);
    }
    if (this.formType === 'edit') {
      this.coursesService.editCourse(value);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  durationValidator(control: AbstractControl) {
    if (control.value > 0) {
      return null;
    } else {
      return { duration: true };
    }
  }
}
