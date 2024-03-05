import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDiferidoRoutingModule } from './contact-diferido-routing.module';
import { ContactDiferidoComponent } from './contact-diferido.component';
import { SendEmailComponent } from '../send-email/send-email.component';
@NgModule({
  declarations: [ContactDiferidoComponent, SendEmailComponent],
  imports: [
    CommonModule,
    ContactDiferidoRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class ContactDiferidoModule {}
