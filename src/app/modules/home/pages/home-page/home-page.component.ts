import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private router: Router) {}

  public status: string = ""

  getGreeting() {
    const hour = new Date().getHours();
    let greeting: string = '';
 
    if (hour >= 5 && hour <= 11) {
        greeting = 'Bom dia';
    } else if (hour >= 12 && hour <= 18) {
        greeting = 'Boa tarde';
    } else if (hour >= 19 && hour <= 23) {
        greeting = 'Boa noite';
    } else if (hour >= 0 && hour <= 4){
      greeting = 'Boa madrugada'
    }
 
    this.status = greeting;
 }

 ngOnInit() {
  setInterval(() => {
      this.getGreeting();
  }, 100);
}

goToProjectDetails(projectId: number): void {
  this.router.navigate(['/page/project-details', projectId]);
}
}
