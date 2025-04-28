import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = "Bienvenidos a Angular";
  subtitulo: string;
  fecha : Date;

  constructor(){
    this.subtitulo = "El mejor framework de frontend de google";
    this.fecha = new Date();
    //this.contador = 0;

    /*setTimeout(()=>{
      this.contador++;
      if (this.contador>this.subtitulo.length) this.contador = 0;
    }, 200)*/
  }


}
