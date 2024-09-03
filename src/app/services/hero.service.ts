import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Hero } from '../model/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  baseUrl = 'http://localhost:8080/hero'

  constructor(private http: HttpClient) { }

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    )
  }

  getHeroDetails(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.baseUrl + "/" + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateHero(id: number, hero:Hero){
    return this.http.put<Hero>(`${this.baseUrl}/${id}`, hero, {observe: 'response'})
    .pipe(
      catchError(this.handleError)
    )
  }

  create(hero: Hero){
    return this.http.post<Hero>(`${this.baseUrl}`, hero)
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteHero(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = 'Bad Request';
          break;
        case 401:
          errorMessage = 'Unauthorized';
          break;
        case 404:
          errorMessage = 'Not Found';
          break;
        case 500:
          errorMessage = 'Internal Server Error';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return throwError(()=> new Error(errorMessage));
  }
}
