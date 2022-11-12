import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  form!: FormGroup;
  faTimes = faTimes;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      authors: new FormArray([]),
      newAuthor: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z0-9]+$'),
        ])
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

  onSubmit(value: any) {
    alert(JSON.stringify(value));
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
