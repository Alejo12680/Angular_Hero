import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../../service/hero.service";
import { herosInterfaz } from '../../service/Interfaz_hero';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit{

  heroes: herosInterfaz[] = [];
  public termino: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroService: HeroService,) {

   }

  ngOnInit() {
      this.activateRoute.params.subscribe( params => {
        //console.log(params['termino']);
        this.termino = params['termino'];
        this.heroes = this._heroService.buscarHeros(params['termino']);
        console.log(this.heroes);
        
      })
  }

}
