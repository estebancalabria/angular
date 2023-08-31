import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  @Input()
  titulo:string = "";

  @Input()
  subtitulo:string = "";

  @Input()
  centrado:boolean = false;

  @Input()
  usuario:string = "";
}
