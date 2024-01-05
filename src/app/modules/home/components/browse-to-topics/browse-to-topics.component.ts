import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-browse-to-topics',
  templateUrl: './browse-to-topics.component.html',
  styleUrls: ['./browse-to-topics.component.scss']
})
export class BrowseToTopicsComponent {
  constructor(private location: Location) { }

  back() {
    this.location.back(); 
  }
  nextPage(){
    this.location.forward();
  }
}
