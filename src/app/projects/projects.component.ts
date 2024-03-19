import { Component } from '@angular/core';
import { projectsData } from '../services/dataProjects';
import { Projects } from '../models/projects.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Projects = projectsData;

  constructor(private router: Router) {}

  goToProject(id: number): void {
    this.router.navigate(['/project/' + id]);
  }
}
