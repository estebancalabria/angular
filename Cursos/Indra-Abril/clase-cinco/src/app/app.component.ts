import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VistaModule } from './vista/vista.module';
import { CommonModule } from '@angular/common';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { PersonaModel } from './models/persona.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    VistaModule, 
    CommonModule, 
    FormPersonaComponent,
    ListaPersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  titulo = 'Bienvenidos a Angular Material';

  @ViewChild(FormPersonaComponent) form! : FormPersonaComponent;

  pasarPersonaAlForm(p : PersonaModel) {
    this.form.editar(p);
  }
}
