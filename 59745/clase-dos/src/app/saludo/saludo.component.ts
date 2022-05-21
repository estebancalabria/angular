import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  saludo : String = "";
  nombre : String = "";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(event:Event){
    this.nombre = (event.target as HTMLInputElement).value;
  }

  clickBoton(){
    this.saludo = "Hola " + this.nombre;
  }

}
