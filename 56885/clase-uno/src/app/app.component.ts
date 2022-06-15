import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string;
  fecha : Date;
  numero : number;
  decimal : number;
  urlGoogle : string = "https://www.google.com";
  rojo : string = "red";

  constructor(){
    this.titulo = "hOlA";
    this.fecha = new Date(2022,6,8);
    this.numero = 10;
    this.decimal = 0.5;
  }

  clickBoton(){
    alert("Hola Mundo");
  }
}
