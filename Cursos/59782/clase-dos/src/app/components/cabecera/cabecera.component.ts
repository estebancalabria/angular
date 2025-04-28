import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()  //Permite setear este atributo desde el template de quien usa el componente
  titulo : string = "Titulo por Defecto";
  @Input()  
  subtitulo : string = "Subtitulo por defecto";

  constructor() { }

  ngOnInit(): void {
  }

}
