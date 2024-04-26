import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-cuatro';
}
