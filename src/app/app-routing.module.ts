import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/heros/hero.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { SeekerComponent } from './components/seeker/seeker.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'heros',
    component: HeroComponent
  },

  {
    path: 'info-hero/:id',
    component: InfoHeroComponent
  },

  {
    path: 'seeker/:termino',
    component: SeekerComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
