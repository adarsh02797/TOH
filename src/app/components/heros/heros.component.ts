import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../model/Hero';
import { error } from 'console';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent implements OnInit{

  heroes: Hero[] = []

  constructor(private heroService: HeroService, private router:Router){}
  
  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe({
      next : data => this.heroes = data,
      error: error => console.log(error),
      complete : () => console.log('Fetched all Heroes')
    });
  }

  delete(id: number) {
    this.heroService.deleteHero(id).subscribe({
      complete: ()=>{
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate([currentUrl]))
      }
  });
  }

}
