import { Component } from '@angular/core';
import { AppService } from './contact-diferido/app.service';
import { Answer } from './models/answer.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app-angular-example-course';
  public movie?: Answer;

  constructor(private appService: AppService) {}

  onSubmit() {
    this.appService.getMovie().subscribe((res) => {
      this.movie = res;
    });
  }
}
