import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  perritos = [
    {nombre : "Firulais", imagen : "https://picsum.photos/200?1"},
    {nombre : "Rintintin", imagen : "https://picsum.photos/200?2"},
    {nombre : "Pluto", imagen : "https://picsum.photos/200?3"},
    {nombre : "Lazie", imagen : "https://picsum.photos/200?4"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
