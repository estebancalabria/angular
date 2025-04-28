import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonDummyService } from 'src/app/services/pokemon-dummy.service';
import { PokemonServiceInterface } from 'src/app/services/pokemon-interface.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemones: PokemonModel[] = [];

  constructor(private service:PokemonServiceInterface) { }

  ngOnInit(): void {
      this.service.getAll().subscribe((data:PokemonModel[])=>{
        this.pokemones.push(...data);
      })
  }

}
