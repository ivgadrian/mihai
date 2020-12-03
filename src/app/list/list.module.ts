import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist/pokelist.component';


import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokelistComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [PokelistComponent],
  providers: [PokemonService]
})
export class ListModule { }
