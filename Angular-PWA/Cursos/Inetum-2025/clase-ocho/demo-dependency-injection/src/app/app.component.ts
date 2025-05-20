import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoLibrosComponent } from "./components/listado-libros/listado-libros.component";

@Component({
  selector: 'app-root',
  imports: [ListadoLibrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-dependency-injection';
}
