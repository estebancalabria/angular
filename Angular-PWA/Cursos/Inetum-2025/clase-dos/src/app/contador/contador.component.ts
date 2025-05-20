import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  valorContador: number = 0;

  constructor(){
    //Si no existe la variable "ContadorComponent_valorContador" en localStorage, la inicializa en 0
    /*if (localStorage.getItem('ContadorComponent_valorContador') === null) {
      localStorage.setItem('ContadorComponent_valorContador', '0');
    } 
    
    this.valorContador = parseInt(localStorage.getItem('ContadorComponent_valorContador')!);*/

    if (sessionStorage.getItem('ContadorComponent_valorContador') === null) {
      sessionStorage.setItem('ContadorComponent_valorContador', '0');
    } 
    
    this.valorContador = parseInt(sessionStorage.getItem('ContadorComponent_valorContador')!);
  }

  actualizarLocalStorage(){
    //Actualiza el valor del contador en localStorage
    localStorage.setItem('ContadorComponent_valorContador', this.valorContador.toString());
  }

  actualizarSessionStorage(){
    //Actualiza el valor del contador en localStorage
    sessionStorage.setItem('ContadorComponent_valorContador', this.valorContador.toString());
  }

  incrementar() {
    this.valorContador++;
    //this.actualizarLocalStorage();
    this.actualizarSessionStorage();
  }

  decrementar() {
    this.valorContador--;
    //this.actualizarLocalStorage();
    this.actualizarSessionStorage();
  }

  resetear() {
    this.valorContador = 0;
    //this.actualizarLocalStorage();
    this.actualizarSessionStorage();
  }

}
