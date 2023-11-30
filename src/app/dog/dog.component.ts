import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog.model';
import { DogService } from './dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  public dog?: Dog;

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogService.getDog().subscribe((res) => {
      this.dog = res[0];
    });
  }
}
