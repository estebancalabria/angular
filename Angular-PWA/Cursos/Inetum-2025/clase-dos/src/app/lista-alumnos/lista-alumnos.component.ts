import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  imports: [CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent {

  //alumnos : string[] = ["Manex", "Unai", "Jennifer", "Ander", "Mario"];
  @Input()
  alumnos : string[] = [];

  agregarAlumno(nombre: string) {
    
    (nombre.trim().length>0) && this.alumnos.push(nombre);
    
    //Lo mismo que hacer
    // if (nombre.trim().length>0) {
  }

  eliminarAlumno(indice: number) {
    this.alumnos.splice(indice, 1);
  }

}
