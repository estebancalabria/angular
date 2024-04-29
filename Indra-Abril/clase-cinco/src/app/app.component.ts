import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VistaModule } from './vista/vista.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VistaModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  array = [1,2,3,4,5];
  titulo = 'Bienvenidos a Angular Material';
}
