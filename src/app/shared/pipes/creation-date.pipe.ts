import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creationDate' })
export class CreationDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return (
      date.getDate().toString().padStart(2, '0') +
      '.' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '.' +
      date.getFullYear()
    );
  }
}
