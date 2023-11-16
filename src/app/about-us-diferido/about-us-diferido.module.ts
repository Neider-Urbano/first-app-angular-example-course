import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsDiferidoRoutingModule } from './about-us-diferido-routing.module';
import { AboutUsDiferidoComponent } from './about-us-diferido.component';


@NgModule({
  declarations: [
    AboutUsDiferidoComponent
  ],
  imports: [
    CommonModule,
    AboutUsDiferidoRoutingModule
  ]
})
export class AboutUsDiferidoModule { }
