import { Component, Input } from '@angular/core';
import { Dog } from '../models/dog.model';

@Component({
  selector: 'app-card-dog',
  templateUrl: './card-dog.component.html',
  styleUrls: ['./card-dog.component.css'],
})
export class CardDogComponent {
  @Input() dog?: Dog;
}
