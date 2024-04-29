import { Component, EventEmitter, Output } from '@angular/core';
import { VistaModule } from '../vista/vista.module';
import { CommonModule } from '@angular/common';
import { PersonaModel } from '../models/persona.model';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [VistaModule, CommonModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {

  personas : PersonaModel[] = [];
  @Output() editarPersona : EventEmitter<PersonaModel>  = new EventEmitter<PersonaModel>();
  
  constructor(private PersonaService : PersonaService) { 
    this.personas = PersonaService.getPersonas();
  }

  editar(persona : PersonaModel) {
    this.editarPersona.emit(persona);
  }
}
