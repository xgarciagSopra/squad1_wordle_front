import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { fromByteArray } from 'base64-js';
import { LoginService } from 'src/app/services/login/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

const pattern = '^[a-zA-Z0-9]*$';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern(pattern),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(12),
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private loginService: LoginService) {}

  // sendDecodeFormData(email: string, password: string) {
  //   this.loginService
  //     .sendFormInfo(
  //       this.encodeDataBase64(email),
  //       this.encodeDataBase64(password)
  //     )
  //     .subscribe({
  //       next: (response: any) => {
  //         if (response.correctInfo) {
  //         }
  //       },
  //       error: () => {},
  //     });
  // }

  encodeDataBase64(data: string) {
    return fromByteArray(new TextEncoder().encode(data));
  }

  disableSend() {
    return (
      !this.userFormControl.value ||
      this.userFormControl.value.trim().length === 0 ||
      !this.passwordFormControl.value ||
      this.passwordFormControl.value.trim().length === 0 ||
      this.passwordFormControl.hasError('required') ||
      this.passwordFormControl.hasError('minlength') ||
      this.passwordFormControl.hasError('maxlenght') ||
      this.userFormControl.hasError('required') ||
      this.userFormControl.hasError('minlength') ||
      this.userFormControl.hasError('pattern')
    );
  }
}
