import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Rutas */
import { AppRoutingModule } from './app-routing.module';

/* Servicios */
import { HeroService } from './service/hero.service';

/* Componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/heros/hero.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { SeekerComponent } from './components/seeker/seeker.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';

@NgModule({
  
  // Aca van los Componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroComponent,
    InfoHeroComponent,
    SeekerComponent,
    CardHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Aca van todos los Servicios
  providers: [
    HeroService
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
