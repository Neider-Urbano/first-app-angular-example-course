import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsDiferidoRoutingModule } from './about-us-diferido-routing.module';
import { AboutUsDiferidoComponent } from './about-us-diferido.component';
import { DogComponent } from '../dog/dog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardDogComponent } from '../card-dog/card-dog.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AboutUsDiferidoComponent, DogComponent, CardDogComponent],
  imports: [
    CommonModule,
    AboutUsDiferidoRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class AboutUsDiferidoModule {}
