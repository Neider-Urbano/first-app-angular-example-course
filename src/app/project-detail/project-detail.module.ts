import { HttpClientModule } from '@angular/common/http';
import { DogComponent } from '../dog/dog.component';
import { CardDogComponent } from '../card-dog/card-dog.component';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { AngularHooksComponent } from '../angular-hooks/angular-hooks.component';
import { FavoriteMovieComponent } from '../favorite-movie/favorite-movie.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DogComponent,
    CardDogComponent,
    ProjectDetailComponent,
    AngularHooksComponent,
    FavoriteMovieComponent,
    CardMovieComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectDetailRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class ProjectDetailModule {}
