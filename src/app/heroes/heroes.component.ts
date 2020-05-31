import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from './../mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}
