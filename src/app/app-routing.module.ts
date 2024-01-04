import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { ProjectsPageComponent } from './modules/home/components/projects-page/projects-page.component';
import { LikedMusicPageComponent } from './modules/home/components/liked-music-page/liked-music-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent,
  children: [
    {
      path: 'home', component: HomePageComponent,      
    },
    {
      path: 'projetos', component: ProjectsPageComponent,      
    },
    {
      path: 'liked-musics', component: LikedMusicPageComponent
    }
 
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
