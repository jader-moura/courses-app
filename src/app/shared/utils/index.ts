import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.match(nameRe)) {
      return null;
    } else {
      return { email: true };
    }
  };
}
