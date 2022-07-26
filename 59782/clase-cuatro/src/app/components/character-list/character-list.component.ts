import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterServiceInterface } from 'src/app/services/character.service.interface';

const URL = "https://rickandmortyapi.com/api/character";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters : CharacterModel[] = [];

  constructor(private service : CharacterServiceInterface) { 

  }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:CharacterModel[])=>{
      this.characters = resp;
    })
  }
}
