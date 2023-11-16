import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDiferidoRoutingModule } from './contact-diferido-routing.module';
import { ContactDiferidoComponent } from './contact-diferido.component';


@NgModule({
  declarations: [
    ContactDiferidoComponent
  ],
  imports: [
    CommonModule,
    ContactDiferidoRoutingModule
  ]
})
export class ContactDiferidoModule { }
