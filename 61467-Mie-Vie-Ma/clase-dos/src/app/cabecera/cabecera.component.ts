import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()
  titulo : string = "<Titulo por Defecto>";
  @Input()
  subtitulo : string;

  constructor() { 
    this.subtitulo = "<Subtitulo por Defecto>";
  }

  donar(){
    Swal.fire("Muchas gracias por su donacion", "Gracias", "success");
  }

  ngOnInit(): void {
  }

}
