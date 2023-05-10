import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { fromByteArray } from 'base64-js';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control?.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

const alphaNumeric = '^[a-zA-Z0-9]*$';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(alphaNumeric),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
    ]),
  });

  matcher = new MyErrorStateMatcher();

  encodeDataBase64(data: string) {
    return fromByteArray(new TextEncoder().encode(data));
  }

  showUserError(): boolean {
    return !!this.form.controls.user.errors;
  }

  showPasswordError(): boolean {
    return !!this.form.controls.password.errors;
  }

  getUserError(): string {
    const user = this.form.controls.user;
    if (user.errors!['required']) return 'Usuario requerido';
    if (user.errors!['minlength'])
      return 'El Usuario debe tener mínimo 4 caracteres';
    if (user.errors!['pattern'])
      return 'El usuario no permite caracteres especiales';
    return 'Por favor inserta un usuario válido';
  }

  getPasswordError(): string {
    const password = this.form.controls.password;
    if (password.errors!['required']) return 'Contraseña requerida';
    if (password.errors!['minlength'])
      return 'La contraseña debe tener mínimo 6 caracteres';
    if (password.errors!['maxlength'])
      return 'La contraseña debe tener máximo 12 caracteres';
    return 'Por favor inserta una contraseña válida';
  }
}
