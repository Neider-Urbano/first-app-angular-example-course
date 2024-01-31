import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog.model';
import { DogService } from './dog.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  public dog?: Dog;
  isLoading$ = this.loadingService.isFetchingDataSubject;

  constructor(
    private dogService: DogService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.dogService.getDog().subscribe((res) => {
      this.dog = res[0];
    });
  }
}
