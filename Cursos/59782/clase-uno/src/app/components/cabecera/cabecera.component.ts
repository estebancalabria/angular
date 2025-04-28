import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  titulo: string = "Bienvenidos a Angular";
  subtitulo: string;
  fechaDeHoy : Date =  new Date(2022,0,1);
  dinero : number = 10000;
  descripcion : string = "Angular es el menor framework de frontend del mundo. Yeah!";
  longDescripcion : number = 1;
  descriptionColor : string = "red";
  titleClass = "display-1";

  constructor() {
    this.subtitulo = "El MEJor FRAMEwoRK de FRoNTenD";
    document.querySelector("title")!.textContent = "NUEVO TITULO";
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.longDescripcion = Math.min(this.descripcion.length, this.longDescripcion+1);
    },300);
  }

  saludar(evt : any){
    alert("Bienvenidos al curso chicos y chicas!" + evt.target.constructor.name)
  }


}
