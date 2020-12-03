import { Component } from '@angular/core';
import { Pokedex } from './list/models/pokedex.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mihaita';
  pokedex: Pokedex = {
    id: 3,
    name: 'Pokedextron'
  }

  changeDetectionLogger() {
    console.log("change detection fired")
  }

  updatePokedex() {
    this.pokedex = { ...this.pokedex, name: 'Salam' }
  }
}
