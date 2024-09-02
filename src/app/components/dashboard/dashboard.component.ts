import { Component } from '@angular/core';
import { Hero } from '../../model/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  topHeroes: Hero[] = []

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe({
      next: heroes => this.topHeroes = heroes.slice(0,4),
      error: err => console.log(err),
      complete: () => console.log("Top heroes fetched")
    })
  }
}
