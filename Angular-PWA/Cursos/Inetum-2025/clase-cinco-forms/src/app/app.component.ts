import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajeFormComponent } from "./components/personaje-form/personaje-form.component";

@Component({
  selector: 'app-root',
  imports: [ PersonajeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Ejemplo uso de Formularios Reactivos (Reactive Forms) en Angular';
}
