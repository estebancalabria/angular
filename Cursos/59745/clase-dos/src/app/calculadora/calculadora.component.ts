import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  valor1:number = 0;
  valor2:number = 0;
  operacion:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setValor1(evt:Event){
    this.valor1 = (evt.target as HTMLInputElement).valueAsNumber;
  }

  
  setValor2(evt:Event){
    this.valor2 = (evt.target as HTMLInputElement).valueAsNumber;
  }

  setOperacion(evt:Event){
    this.operacion = (evt.target as HTMLSelectElement).value;
  }

}
