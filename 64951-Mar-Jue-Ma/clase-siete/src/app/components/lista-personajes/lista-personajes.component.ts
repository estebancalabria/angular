import { Component, OnInit } from '@angular/core';
import { ApiResult } from 'src/app/models/api-result.model';
import { Personaje } from 'src/app/models/personaje.model';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  //personajeService: PersonajeService = new PersonajeService();
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {

  }

  //El ngOnInit a diferencia del contructor se ejecuta cuando el componente se muestra
  ngOnInit(): void {
    //this.personajes = this.personajeService.getAll();
    this.personajeService.getAll().subscribe((result: ApiResult) => {
      this.personajes = result.results;
    })
  }
}
