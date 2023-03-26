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

@NgModule({
  
  // Aca van los Componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroComponent
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
