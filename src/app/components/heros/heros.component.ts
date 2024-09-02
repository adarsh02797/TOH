import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../model/Hero';
import { error } from 'console';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent implements OnInit{

  heroes: Hero[] = []

  constructor(private heroService: HeroService){}
  
  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe({
      next : data => this.heroes = data,
      error: error => console.log(error),
      complete : () => console.log('Fetched all Heroes')
    });
  }

}
