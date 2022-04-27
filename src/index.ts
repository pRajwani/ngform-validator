import { FormGroup } from "@angular/forms";

export const ngValidator = (formGroup: FormGroup, formErrors: IFormError, formErrorMessages: IFormErrorMessages) => {
    if(!formGroup){
        return;
    }
    for (const field in formErrors) {
        if (formErrors.hasOwnProperty(field)) {
          formErrors[field] = '';
          const control = formGroup.get(field);
          if (control && (control.dirty || control.touched) && !control.valid) {
            const messages = formErrorMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                  formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
    }
    return formErrors;
}

interface IFormError {
  [key: string]: string;
}

interface IFormErrorMessages {
  [key: string]: {
    [key: string]: string;
  }
}