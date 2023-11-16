import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImgViewComponent } from './img-view/img-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'img/:id',
    component: ImgViewComponent,
  },
  {
    path: 'AboutUs',
    loadChildren: () =>
      import('./about-us-diferido/about-us-diferido.module').then(
        (m) => m.AboutUsDiferidoModule
      ),
  },
  {
    path: 'Contact',
    loadChildren: () =>
      import('./contact-diferido/contact-diferido.module').then(
        (m) => m.ContactDiferidoModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
