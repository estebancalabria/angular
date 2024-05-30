import { Component } from '@angular/core';
import { ListadoContactosComponent } from './components/listado-contactos/listado-contactos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-demo';
}
