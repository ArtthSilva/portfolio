import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseToTopicsComponent } from './components/browse-to-topics/browse-to-topics.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LeftButtonComponent } from './components/left-button/left-button.component';
import { MusicBarComponent } from './components/music-bar/music-bar.component';



@NgModule({
  declarations: [
    BrowseToTopicsComponent,
    HomeComponent,
    SidebarComponent,
    LeftButtonComponent,
    MusicBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
