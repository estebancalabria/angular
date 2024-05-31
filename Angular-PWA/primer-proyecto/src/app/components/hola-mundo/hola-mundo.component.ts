import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo : string = "Hola Mundo desde el componente HolaMundoComponent";
  public color : string = "blue";
  //Opcionalmente public
  public alumnos : string[] = ["Jesus","Unai","Jeray","Mikel","Maore"];
  mostarDiv : boolean = false;

  alternarDivs(){
    this.mostarDiv = !this.mostarDiv;
  }

  /*agregarAlumno(alumno : string){
    if (alumno.length>0) {
      this.alumnos.push(alumno);
    }
  }*/

  //agregarAlumno(txtAlumno : any){ con el tipo any no hace ningun checkeo de tipos
  agregarAlumno(txtAlumno : HTMLInputElement){
    if (txtAlumno.value.length>0) {
      this.alumnos.push(txtAlumno.value);
      txtAlumno.value = "";
    }
  }
}
