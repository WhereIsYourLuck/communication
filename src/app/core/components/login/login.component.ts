import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;

  errors: string[] = [];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  onSubmitForm() {
    this.errors = [];
    this.auth
      .login({
        email: this.loginForm.get('email')?.value ?? '',
        password: this.loginForm.get('password')?.value ?? '',
      })
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: () => {
          this.errors.push('Invalid email or password');
        },
      });
  }
}
