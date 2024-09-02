import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HerosComponent},
  {path: 'details/:id', component: HeroDetailsComponent},
  {path: 'add', component:AddHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
