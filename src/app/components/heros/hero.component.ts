import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  constructor ( private _heroesService: HeroService) {

  }

  ngOnInit() {

  }

}
