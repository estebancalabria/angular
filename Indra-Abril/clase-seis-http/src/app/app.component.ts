import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaRickAndMortyComponent } from './lista-rick-and-morty/lista-rick-and-morty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaRickAndMortyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-seis-http';
}
