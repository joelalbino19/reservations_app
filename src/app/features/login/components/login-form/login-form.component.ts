import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  [x: string]: any;
  loginForm: FormGroup<IUser>;

  loading: boolean = false;

  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.loading = false;
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/reservations']);
        },
        error: (error) => {
          console.log(error);
          if (error.status === 0) {
            this.errorMessage = "No tienes conección a la api";
            return
          } else {            
            this.errorMessage = error.error.message;
          }
          this.loading = false;
        },
      });
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
