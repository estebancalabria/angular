import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos : string[] = [];
  alumnosHidden: string[] = ["Dario Torrejon",
    "Lucas Montenegro",
    "Gabriel Samacoits",
    "Sebastian Montes",
    "Fer Ledesma",
    "Oswaldo Hernandes"];

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{ this.alumnos = [...this.alumnosHidden]}, 2000)
  }

}
