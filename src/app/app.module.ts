import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    DashboardComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
