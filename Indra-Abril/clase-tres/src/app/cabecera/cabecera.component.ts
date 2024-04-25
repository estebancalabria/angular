import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  //Estas variables se tendrian que poder llenar desde afuera
  @Input() titulo: string = "<Titulo>";
  @Input() subtitulo: string = "<Subtitulo>";
  @Input() fecha : Date = new Date();
}
