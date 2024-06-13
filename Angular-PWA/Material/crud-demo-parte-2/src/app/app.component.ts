import { Component } from '@angular/core';
import { ListadoContactosComponent } from './components/listado-contactos/listado-contactos.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoContactosComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-demo';
}
