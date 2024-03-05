import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Data } from '../models/answer.model';
import { LoadingService } from '../dog/loading.service';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css'],
})
export class FavoriteMovieComponent implements OnInit {
  public movie?: Data;
  isLoading$ = this.loadingService.isFetchingDataSubject;

  constructor(
    private appService: AppService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.onSubmitMovie();
  }

  onSubmitMovie(): void {
    this.appService.getMovie().subscribe((res) => {
      const countAnswers = res.Search.length;
      const idMovieSelect = Math.floor(Math.random() * countAnswers);
      this.movie = res.Search[idMovieSelect];
    });
  }
}
