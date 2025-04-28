import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaAlumnos : string[] = ["Leandro","Moises", "Maria", "Hernan", "Esteban", "Enanuel", "Freddy"];

  finalizar(){
    this.listaAlumnos = [];
  }

}
