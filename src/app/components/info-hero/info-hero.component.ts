import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css'],
})
export class InfoHeroComponent implements OnInit {

  //variables
  infoHero: any = {};

  constructor(
    private activateRouter: ActivatedRoute,
    private _heroesService: HeroService) {

    //Generador de Observadores que estan Escuchando constantemente se generan Parametros para obtener el Index como Id, porque cuando definimos la rutas colocamos info-hero/:id si colocamos info-hero/:prueba en los params [] colocamos params['prueba'].
    this.activateRouter.params.subscribe((params) => {
      console.log(params['id']);
      
      this.infoHero = this._heroesService.getInfoHero(params['id']);
      console.log(this.infoHero);
    });
  }

  ngOnInit() { }
}
