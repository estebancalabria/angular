import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() titulo: string = "<titulo por defecto>";
  @Input()
  subtitulo: string;

  constructor() { 
    this.subtitulo = "<subtitulo por defecto>";
  }

  confirmarPolitica(){
    Swal.fire("Politica de Cookies",
    `Gracias por aceptar nuestra politica de cookies 
    ahora todos sus datos privados de navegacion 
    son nuestros`,
    "success");
  }

  ngOnInit(): void {
  }

}
