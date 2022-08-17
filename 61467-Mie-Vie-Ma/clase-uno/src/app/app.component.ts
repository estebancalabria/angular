import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo: string = "Angular Rules";
  subtitulo: string;
  fecha : Date;
  subtitulo_chars:number = 5;
  subtitulo_color:string = "red";

  constructor(){
    this.subtitulo = "El mejor framework de desarrollo de aplicaciones";
    this.fecha = new Date();
  }
  
  ngOnInit(): void {
    setInterval(()=>{
      this.subtitulo_chars++;
      if (this.subtitulo_chars>this.subtitulo.length){
        this.subtitulo_chars=1;
      } 
      this.subtitulo_color = "#"+Math.floor(Math. random()* 777215).toString();
    }, 300)
  }
}
