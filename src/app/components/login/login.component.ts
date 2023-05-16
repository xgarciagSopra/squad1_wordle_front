import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromByteArray } from 'base64-js';
import { ErrorMatcher } from 'src/app/helpers/errorStateMatcher';
import { ULogin } from 'src/app/interfaces/u-login';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service'; 

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

  constructor(private loginService: LoginService, private userService: UserService, private router: Router) {}

  sendDecodeFormData() {
    let uname = "";
    let pass = "";
    if (this.form.controls['user'].value !== null) {
       uname = this.form.controls['user'].value;
    }
    if (this.form.controls['password'].value !== null) {
      pass = this.form.controls['password'].value;
    }
    this.loginService
      .sendFormInfo(
        this.encodeDataBase64(uname),
        this.encodeDataBase64(pass)
      )
      .subscribe({
        next: (response: ULogin) => {
          
          this.userService.setToken(response['token']);
          this.router.navigate(["/game-center"])
        },
        
      });
  }

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
