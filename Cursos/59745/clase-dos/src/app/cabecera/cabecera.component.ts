import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  subtitulo : String = "Tu dealer favorito de cryptos";

  constructor() { }

  ngOnInit(): void {
  }

  saludar(){
    //alert("Bienvenidos al sitio!");
    let oldValue = this.subtitulo;
    this.subtitulo = "Bienvenidos a la app";
    setTimeout(()=>{
      this.subtitulo = oldValue;
    },1500);
  }

}
