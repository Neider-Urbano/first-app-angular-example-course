import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImgViewComponent } from './img-view/img-view.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatTextCareerPipe } from './home/format-text-career.pipe';
import { HeaderComponent } from './header/header.component';
import { NetworksLogoHeaderComponent } from './networks-logo-header/networks-logo-header.component';
import { TextSalaryExpectationsDirective } from './directives/text-salary-expectations.directive';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { JwtApiInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ImgViewComponent,
    FormatTextCareerPipe,
    HeaderComponent,
    NetworksLogoHeaderComponent,
    TextSalaryExpectationsDirective,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectsPageComponent,
    BlogsComponent,
    CardBlogComponent,
    BlogsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
