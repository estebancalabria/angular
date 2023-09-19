import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  personas : Persona[] = [];

  constructor(private service:PersonaService){

  }
  ngOnInit(): void {
    this.service.getAll().subscribe((result:Persona[])=>{
      this.personas = result;
    })
  }
}
