import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { AppService } from './app.service';

type FormType = {
  user: string;
  password: string;
};

@Component({
  selector: 'app-contact-diferido',
  templateUrl: './contact-diferido.component.html',
  styleUrls: ['./contact-diferido.component.css'],
})
export class ContactDiferidoComponent {
  formGroup: FormGroup;
  public movie?: Answer;

  constructor(private _builder: FormBuilder, private appService: AppService) {
    this.formGroup = this._builder.group({
      user: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(form: FormType) {
    if (this.formGroup.valid) {
      alert(`
        User: ${form.user}
        Password: ${form.password}
      `);
    } else {
      alert('No valid');
    }
  }

  onSubmitMovie() {
    this.appService.getMovie().subscribe((res) => {
      this.movie = res;
    });
  }
}
