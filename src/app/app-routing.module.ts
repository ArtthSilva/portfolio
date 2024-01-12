import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProjectsPageComponent } from './modules/home/pages/projects-page/projects-page.component';
import { LikedMusicPageComponent } from './modules/home/pages/liked-music-page/liked-music-page.component';
import { TechnologiesPageComponent } from './modules/home/pages/technologies-page/technologies-page.component';
import { ProjectsDetailsComponent } from './modules/home/pages/projects-details/projects-details.component';
import { AboutmePageComponent } from './modules/home/pages/aboutme-page/aboutme-page.component';

const routes: Routes = [
  {path: "page", component: HomeComponent,
   children: [
    {
      path: 'home', component: HomePageComponent,      
    },
    {
      path: 'projetos', component: ProjectsPageComponent,      
    },
    {
      path: 'liked-musics', component: LikedMusicPageComponent
    },
    {
      path: 'technologies', component: TechnologiesPageComponent
    },
    {
      path: 'project-details/:id', component: ProjectsDetailsComponent
    },
    {
      path: 'about', component: AboutmePageComponent
    }
  ]
},
{
  path: '', 
  redirectTo: '/page/home', 
  pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
