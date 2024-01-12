import { Component, OnInit } from '@angular/core';
import { projects, Project } from 'src/app/projects-data';
import { ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-projects-details',
 templateUrl: './projects-details.component.html',
 styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  project: Project | undefined;
 
 constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    let projectId = +params['id'];
    this.project = projects.find(p => p.id === projectId);
  });
 }
 
 ngOnInit(): void {}
}
