import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  titulo: string = 'Inetum';
  subtitulo: string = 'La tecnologia del futuro hoy...';
}
