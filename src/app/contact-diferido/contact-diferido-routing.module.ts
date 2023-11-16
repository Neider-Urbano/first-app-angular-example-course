import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDiferidoComponent } from './contact-diferido.component';

const routes: Routes = [{ path: '', component: ContactDiferidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDiferidoRoutingModule { }
