import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Heroes} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    /**меняем на асинхронное получение данных через observable
     * getHeroes() возвращает объект observable, а через метод
     * subscribe мы получаем данные (аналог then в Promise)*/
    this.heroService.getHeroes()
                    .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
