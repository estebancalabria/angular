import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()
  titulo:string = "<TITULO POR DEFECTO>";

  angulo:number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{ this.angulo++ },30);
  }

}
