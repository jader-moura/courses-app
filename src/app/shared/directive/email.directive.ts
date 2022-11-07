import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { emailValidator } from '../utils';

// @Directive({
//   selector: '[appEmail]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: EmailValidatorDirective,
//       multi: true,
//     },
//   ],
// })
// export class EmailValidatorDirective implements Validator {
//   emailRgx =
//     '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';

//     validate(control: AbstractControl): ValidationErrors | null {
//     //   return emailValidator(this.emailRgx)(control);
//     }

//   //   validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
//   //     return this.customValidator.userNameValidator(control);
//   //   }
// }
