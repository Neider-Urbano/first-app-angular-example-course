import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService,
    private builder: FormBuilder
  ) {
    this.formLogin = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value).subscribe(
        (response) => {
          this.cookieService.set('token', JSON.stringify(response.token));
          window.location.href = '/project/6';
        },
        (error) => {
          console.error('Login failed:', error);
          this.router.navigate(['/Projects']);
        }
      );
    } else {
      alert('No valid');
    }
  }
}
