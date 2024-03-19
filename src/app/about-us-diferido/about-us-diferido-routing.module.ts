import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsDiferidoComponent } from './about-us-diferido.component';

const routes: Routes = [{ path: '', component: AboutUsDiferidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsDiferidoRoutingModule {}
