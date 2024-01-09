import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router

@Component({
 selector: 'app-projects-page',
 templateUrl: './projects-page.component.html',
 styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  constructor(private router: Router) {}
 
  goToProjectDetails(projectId: number): void {
    this.router.navigate(['/page/project-details', projectId]);
  }
 }
