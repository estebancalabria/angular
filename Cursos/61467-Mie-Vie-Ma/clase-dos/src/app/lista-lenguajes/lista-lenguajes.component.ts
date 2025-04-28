import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-lenguajes',
  templateUrl: './lista-lenguajes.component.html',
  styleUrls: ['./lista-lenguajes.component.css']
})
export class ListaLenguajesComponent implements OnInit {


  lenguajesBuffer : any[] = [
    {nombre:"ActionScript", descripcion:"Flash is dead"},
    {nombre:"4GlPro", descripcion:"Muy parecido a Cobol"},
    {nombre:"Cobol", descripcion:"Todavia se usa"},
    {nombre:"Pascal", descripcion:"Con este aprendi a programar"}
  ];

  lenguajes : any[] = [];

  constructor() { }

  ngOnInit(): void {
    let end = 0;
    let intervalId = setInterval(()=>{
      if (this.lenguajes.length==this.lenguajesBuffer.length){
        clearInterval(intervalId);
      } else{
        end++
        this.lenguajes = this.lenguajesBuffer.slice(0,end);
      }  
    }, 1000);
  }

}
