import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromByteArray } from 'base64-js';
import { ErrorMatcher } from 'src/app/helpers/errorStateMatcher';

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
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
  });

  matcher = new ErrorMatcher();

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
    const userErrors = this.form.controls['user'].errors;
    if (!userErrors) return '';
    if (userErrors['required']) {
      return 'Usuario requerido';
    }
    if (userErrors['minlength'])
      return 'El Usuario debe tener mínimo 4 caracteres';
    if (userErrors['pattern'])
      return 'El usuario no permite caracteres especiales';
    return 'Por favor inserta un usuario válido';
  }

  getPasswordError(): string {
    const passwordErrors = this.form.controls['password'].errors;
    if (!passwordErrors) return '';
    if (passwordErrors['required']) return 'Contraseña requerida';
    if (passwordErrors['minlength'])
      return 'La contraseña debe tener mínimo 6 caracteres';
    if (passwordErrors['maxlength'])
      return 'La contraseña debe tener máximo 12 caracteres';
    return 'Por favor inserta una contraseña válida';
  }
}
