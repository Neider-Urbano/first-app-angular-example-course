import { Component, Input } from '@angular/core';
import { Data } from '../models/answer.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  @Input() movie?: Data;
}
