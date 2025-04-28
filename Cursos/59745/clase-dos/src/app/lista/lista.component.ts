import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //listaCryptos? : String[]  <<< Esta variables puede admitir nulos
  //listaCryptos! : String[] << Le digo a TypeScript que no valide nada, yo me encargo
  listaCryptos : String[] = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.listaCryptos = ["Bitcoin", "Ethereun", "DogeCoin", "Luna", "ADA"];
    }, 2000)
  }

}
