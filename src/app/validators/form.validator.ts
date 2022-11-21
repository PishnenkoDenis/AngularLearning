import { AbstractControl, ValidatorFn } from "@angular/forms";

export function formValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} | null => {
     let valid = !control.value || control.value.valid;
     return valid ? null : {form: true};
  }
}