import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly httpClient: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.httpClient.get<any>("https://pokeapi.co/api/v2/pokemon")
      .pipe(
        map(item => item.results),
        catchError(err => { console.log(err); return of(err) })
      );
  }
}
