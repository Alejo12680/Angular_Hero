import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})

export class CardHeroComponent implements OnInit{

  /* La propiedad heroe puede venir de afuera con el @input desde el padre hacia el hijo que seria este archivo */
  @Input() heroe:any = {};
  @Input() index:any;

 /*  @Output() heroeSelection: EventEmitter<number>; */

  constructor(private router: Router) {

    /* Se Inicializo el eventEmitter */
    /* this.heroeSelection = new EventEmitter(); */

  }

  ngOnInit() {
      
  }

  /* @Output */
  /* verHero() {
    //Emitimos el Index 
    this.heroeSelection.emit(this.index);
  } */


  /* @Input */
  verHero() {
    console.log(this.index);
    this.router.navigate(['/info-hero', this.index]); 
  }

}
