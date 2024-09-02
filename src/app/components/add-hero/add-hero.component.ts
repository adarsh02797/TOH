import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../model/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent {

  hero: Hero | undefined;

  constructor(private heroService: HeroService, private location: Location){}
  add(name: string){
    let hero : Hero = {"id": 0, "name":name};
    this.heroService.create(hero).subscribe({
      next: _ => console.log('Hero Created!'),
      error: err => console.error(err)
    })
    this.location.back()
  }

  back(){
    this.location.back();
  }
}
