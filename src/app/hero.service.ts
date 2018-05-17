import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {Heroes} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return Heroes;
  // }
  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }
}
