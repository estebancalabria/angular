import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  size = "14px";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{ this.size=10 + Math.round(Math.random() * 15) + "px"}, 200)
  }

  ganarDinero(){
    alert("Instalando troyanos y abriendo 10 popus de publidad...");
  }

}
