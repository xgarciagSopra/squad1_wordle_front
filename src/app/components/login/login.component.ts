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

const validCharacters = '^[a-zA-Z0-9]*$';

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
      Validators.pattern(validCharacters),
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

  getUserError() {
    let user = this.form.controls.user;
    if (user.errors!['required']) return 'Usuario requerido';
    if (user.errors!['minlength']) return 'Usuario demasiado corto';
    if (user.errors!['pattern'])
      return 'El usuario no permite caracteres especiales';
    else return 'Por favor inserta un usuario válido';
  }

  getPasswordError() {
    let password = this.form.controls.password;
    if (password.errors!['required']) return 'Contraseña requerida';
    if (password.errors!['minlength']) return 'Contraseña demasiado corta';
    if (password.errors!['maxlength']) return 'Contraseña demasiado larga';
    else return 'Por favor inserta una ontraseña válida';
  }

  disableSend() {
    return this.form.valid;
  }
}
