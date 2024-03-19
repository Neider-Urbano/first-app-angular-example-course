import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImgViewComponent } from './img-view/img-view.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { jwtGuardGuard } from './guards/jwt-guard.guard';

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
    path: 'project/:id',
    loadChildren: () =>
      import('./project-detail/project-detail.module').then(
        (m) => m.ProjectDetailModule
      ),
    canActivate: [jwtGuardGuard],
  },
  {
    path: 'Projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'Blogs',
    component: BlogsPageComponent,
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
