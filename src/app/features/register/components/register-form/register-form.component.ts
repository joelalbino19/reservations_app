import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/register.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm: FormGroup<IUser>;

  constructor(
    private fb: FormBuilder,
    private registerService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, email, password, confirmPassword } = this.registerForm.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      this.registerService.register(username, email, password).subscribe(
        response => {
          alert('Registration successful!');
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/reservations']);
        },
        error => {
          alert('Registration failed. Try again.');
        }
      );
    }
  }



  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
