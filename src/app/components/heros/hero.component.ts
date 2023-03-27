import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { herosInterfaz } from '../../service/Interfaz_hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  //Variables
  heroes: herosInterfaz[] = [];

  constructor(
    private _heroesService: HeroService, 
    private router: Router) { }

  ngOnInit() {

    //Igualamos el servicio en una variable para poder utilizarlo
    this.heroes = this._heroesService.getHeros();

    //Hacemos con consolog para ver el servicio en consola html
    console.log(this.heroes);
  }

  // Funcion de Buttons
  verHero(index: number) {
    this.router.navigate(['/info-hero', index]);
  }
}
