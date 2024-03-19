import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsDiferidoRoutingModule } from './about-us-diferido-routing.module';

import { AboutUsDiferidoComponent } from './about-us-diferido.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AboutUsDiferidoComponent],
  imports: [CommonModule, AboutUsDiferidoRoutingModule, HttpClientModule],
})
export class AboutUsDiferidoModule {}
