import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input()
  titulo: string = "";

  @Input()
  items: string[] = []

  @Input()
  mensajeVacio : string = "No hay ningun elemento para mostrar"
}
