import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()  //Indica que la propiedad la puedo setear desde afuera en el html  
  titulo:string = "<Titulo por Defecto>";
  
  @Input()
  subtitulo:string = "<Subtitulo por defecto>";

  constructor() { }

  ngOnInit(): void {
  }

}
