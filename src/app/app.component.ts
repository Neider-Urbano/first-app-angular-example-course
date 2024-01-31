import { Component } from '@angular/core';
import { AppService } from './favorite-movie/app.service';
import { Answer } from './models/answer.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'first-app-angular-example-course';
  public movie?: Answer;
  public dateCurrent: Date = new Date();

  constructor(private appService: AppService) {}

  onSubmit(): void {
    this.appService.getMovie().subscribe((res) => {
      this.movie = res;
    });
  }
}
