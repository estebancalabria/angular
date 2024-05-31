import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HolaMundoComponent, FormularioEjemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primer-proyecto';
}
