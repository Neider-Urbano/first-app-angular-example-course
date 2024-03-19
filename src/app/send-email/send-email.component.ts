import { Component } from '@angular/core';
import { FormType } from '../models/formGroup.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent {
  formGroup: FormGroup;

  constructor(private builder: FormBuilder) {
    this.formGroup = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(form: FormType) {
    if (this.formGroup.valid) {
      alert(`
        Email: ${form.email}
        Password: ${form.password}
        Message: ${form.message}
      `);
    } else {
      alert('No valid');
    }
  }
}
