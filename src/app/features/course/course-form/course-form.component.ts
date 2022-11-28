import { AuthorsStoreService } from './../../../services/authors-store.service';
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
import { AuthorsService } from 'src/app/services/authors.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  form!: FormGroup;
  faTimes = faTimes;
  formType: 'add' | 'edit' | 'show' = 'show';
  authorsList: any[] = [];
  courseId?: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private authorsService: AuthorsService,
    private authorsStoreService: AuthorsStoreService
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url: any) => {
      if (url[0].path === 'add') {
        this.formType = 'add';
      } else if (url[0].path === 'edit') {
        this.formType = 'edit';
        this.courseId = url[1].path;
      } else {
        this.formType = 'show';
        this.courseId = url[0].path;
      }

      if (this.courseId) {
        this.getCurrentCourse(this.courseId);
      }
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
      this.authorsService
        .addAuthor({ name: authorName })
        .subscribe(({ result }) => {
          this.authorsList.push({
            name: result.name,
            id: result.id,
          });
          (<FormArray>this.form.controls['authors']).push(
            new FormControl(result.id)
          );
        });

      this.form.get('newAuthor')?.setValue('');
      this.form.get('newAuthor')?.markAsUntouched();
    }
  }

  getCurrentCourse(courseId: string) {
    // Get all course information
    this.coursesService.getCourse(courseId).subscribe(({ result }: any) => {
      // Set value in inputs accordingly with the information got
      this.form.controls['title'].setValue(result.title);
      this.form.controls['description'].setValue(result.description);
      this.form.controls['duration'].setValue(result.duration);

      if (result.authors.length > 0) {
        result.authors.forEach((authorId: string) => {
          (<FormArray>this.form.controls['authors']).push(
            new FormControl(authorId)
          );
        });

        // Get all authors and use the necessary information
        this.authorsStoreService.authors$.subscribe(
          ({ result: authorResult }) => {
            authorResult.forEach((author: any) => {
              if (result.authors.includes(author.id)) {
                this.authorsList.push(author);
              }
            });
          }
        );
      }
    });
  }

  removeAuthor(authorIndex: number) {
    (<FormArray>this.form.controls['authors']).removeAt(authorIndex);
    this.authorsList.splice(authorIndex, 1);
  }

  onSubmit(value: any) {
    delete value.newAuthor;

    if (this.formType === 'add') {
      this.coursesService.createCourse(value);
    }
    if (this.formType === 'edit') {
      this.coursesService.editCourse({ ...value, id: this.courseId });
    }
  }

  goBack() {
    this.router.navigate(['/courses']);
  }

  durationValidator(control: AbstractControl) {
    if (control.value > 0) {
      return null;
    } else {
      return { duration: true };
    }
  }
}
