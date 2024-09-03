import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../../model/Hero';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit{

  hero: Hero|undefined;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location){}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroDetails(id).subscribe({
      next: data => this.hero = data,
      error: err => console.log(err),
      complete: () => console.log('Hero Details fetched')
    });
  }

  change() {
    if(!this.hero)return;
    if(this.hero.name == "")return;
    this.heroService.updateHero(this.hero.id,this.hero).subscribe({
      next:response => {
        if(response.status === 200){
          console.log("Updated Hero")
        }
      },
      error: err => console.log('Error: Updating Hero Details')
    })
    }

  back() {
    this.location.back();
  }

}
