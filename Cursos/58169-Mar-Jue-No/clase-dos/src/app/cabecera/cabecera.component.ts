import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()
  titulo: string = "<Titulo de la APP>";
  colorTitulo : string = "green";

  @Input()
  subtitulo: string;
  colorSubtitulo : string = "red";
  claseTitulo = "display-1";

  subChars: number = 1;

  constructor() {
    this.subtitulo = "<Subtitulo de la APP>";
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.subChars++;
      if (this.subChars>this.subtitulo.length) { this.subChars = 1}
      this.colorSubtitulo = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }, 200)
  }

}
