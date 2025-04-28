import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo : string = "Bienvenidos a Angular"
  subtitulo : string;
  subtitulo_chars:number;
  fecha : Date;

  constructor(){
    this.subtitulo = "El mejor framework de desarrollo del mundo";
    this.fecha = new Date();
    this.subtitulo_chars = 1;
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.subtitulo_chars++;
      if (this.subtitulo_chars>this.subtitulo.length){
        this.subtitulo_chars = 1;
      }
    },150);
  }
}
