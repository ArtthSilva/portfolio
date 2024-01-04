import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseToTopicsComponent } from './components/browse-to-topics/browse-to-topics.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LeftButtonComponent } from './components/left-button/left-button.component';
import { MusicBarComponent } from './components/music-bar/music-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LucideAngularModule, ChevronLeft,ChevronRight, Home, Search  } from 'lucide-angular';
import { ButtonPerfilComponent } from './components/button-perfil/button-perfil.component';
import { TopicsButtonsComponent } from './components/topics-buttons/topics-buttons.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { ProjectsSectionHomeComponent } from './components/projects-section-home/projects-section-home.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { TopicDescriptionComponent } from './components/topic-description/topic-description.component';
import { LikedMusicPageComponent } from './components/liked-music-page/liked-music-page.component';


@NgModule({
  declarations: [
    BrowseToTopicsComponent,
    HomeComponent,
    SidebarComponent,
    LeftButtonComponent,
    MusicBarComponent,
    HomePageComponent,
    NavbarComponent,
    ButtonPerfilComponent,
    TopicsButtonsComponent,
    ProjectCardsComponent,
    ProjectsSectionHomeComponent,
    ProjectsPageComponent,
    TopicDescriptionComponent,
    LikedMusicPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LucideAngularModule.pick({ ChevronLeft }),
    LucideAngularModule.pick({ ChevronRight }),
    LucideAngularModule.pick({ Home }),
    LucideAngularModule.pick({ Search }),
    ]
})
export class HomeModule { }
