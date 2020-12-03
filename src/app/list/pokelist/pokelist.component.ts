import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { Pokedex } from '../models/pokedex.model'

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokelistComponent implements OnInit {

  pokemons: any[];
  pokemonsAsync: Observable<any>;

  @Input() pokedex: Pokedex;

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonsSubscribeWay();

    this.getPokemonAsyncWay();


  }


  private getPokemonAsyncWay() {
    this.pokemonsAsync = this.pokemonService.getPokemons();
  }

  private getPokemonsSubscribeWay() {
    this.pokemonService.getPokemons().subscribe(
      pokemons => {
        this.pokemons = pokemons;
      }
    );
  }
}
