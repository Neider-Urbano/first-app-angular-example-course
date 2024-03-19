import { CookieService } from 'ngx-cookie-service';
import { projectsData } from './../services/dataProjects';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { imgsData } from '../services/dataImgs';
import { Project, Projects } from '../models/projects.model';
import * as jwtToken from 'jwt-decode';
import { LoginData } from '../models/login.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  idProjectSelect: number | undefined;
  projectSelect: Project | undefined;
  projects: Projects = projectsData;
  imgs = imgsData;
  name: string | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {}

  goToImg(id: number): void {
    this.router.navigate(['/img', id]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.idProjectSelect = parseInt(id);
    } else {
      this.idProjectSelect = 1;
    }

    if (id === '6') {
      const token = this.cookieService.get('token');
      if (token) {
        const decodedToken: LoginData = jwtToken.jwtDecode(token);
        this.name = decodedToken.name;
      }

      this.projectSelect = {
        id: 6,
        name: 'Valid Token',
        description: 'Example Basic',
        img: 'https://www.syncfusion.com/blogs/wp-content/uploads/2023/01/Angular-Lifecycle-Hooks-in-Practice.png',
      };
    } else {
      this.projectSelect = this.projects.find(
        (project) => project.id == this.idProjectSelect
      );
    }
  }
}
