import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

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
  }, 1000);
}

}
