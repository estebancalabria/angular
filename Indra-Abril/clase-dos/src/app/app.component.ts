import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgFor, NgIf, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    UpperCasePipe, 
    LowerCasePipe,
     TitleCasePipe, 
     SlicePipe, 
     DatePipe, 
     CurrencyPipe, 
     JsonPipe, 
     NgFor, 
     NgIf,
    NgClass, 
    TodoListComponent],
   
  templateUrl: './app.component.html',
  //Tambien se puede hacer:
  /*template : `
    <h1 class="alert alert-info text-center p-4">
    {{ titulo | titlecase | slice:0:longitudTitulo}}
    <div class="text-end my-texto-chico">
      {{fechaActual | date:'dd/MM/yyyy'}}
    </div>
  </h1>
  `,*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  //titulo : String = "Bienvenidos a Angular";
  //titulo : String = 5; // Error de tipo de dato
  //titulo?: String;  // ? = opcional
  titulo: string;
  longitudTitulo: number = 1;
  fechaActual: Date = new Date();
  valorBitcoin: number = 62300;
  color: string = "red";
  objeto = { nombre: "Juan", edad: 25, direccion: { calle: "Av. Siempre Viva", numero: 1234 } };
  clickCount: number = 0;
  //asistentes = ["Luis", "Zhao", "Lidia", "Samuel", "Eduardo", "Shutao", "Esteban"];
  asistentes: string[] = ["Luis", "Zhao", "Lidia", "Samuel", "Eduardo", "Shutao"];
  //asistentes : string[] = [];


  constructor() {
    this.titulo = "Bienvenidos a Angular";

    setInterval(() => {
      //this.valorBitcoin = "Hola"; // Error de tipo de dato
      this.longitudTitulo++;
      (this.longitudTitulo > this.titulo.length) && (this.longitudTitulo = 1);  //one liner
      //O Bien
      //this.longitudTitulo > this.titulo.length ? this.longitudTitulo = 0 : this.longitudTitulo; //Operador Ternario ?
      //Es lo mismo que escribir
      /*if (this.longitudTitulo > this.titulo.length) {
          (this.longitudTitulo = 0);
      }*/
    }, 200);
  }

  /*clickBotonMagico() { 
    alert("Hiciste click en el boton magico");
  }*/

  //Version del evento sin tipar
  /*clickBotonMagico(evento: any) {  //any = cualquier tipo de dato
     //alert(evento.constructor.name); // Para saber de que tipo es el objeto (any) que se esta pasando
     this.clickCount++;
     evento.target.innerText =  ` Hiciste click ${this.clickCount} veces`;
  }*/

  //Version del evento tipado
  clickBotonMagico(evento: MouseEvent) {
    this.clickCount++;
    //alert(evento.target!.constructor.name);  // ! = No es nulo, ya que el evento puede ser nulo
    // HTMLButtonElement = Es el tipo de dato que se espera

    //evento.target.innerText =  ` Hiciste click ${this.clickCount} veces` no funciona porque 
    //                                                                     target es de tipo EventTarget que no tiene 
    //                                                                     la propiedad innerText

    //(evento.target as HTMLButtonElement).innerText = ` Hiciste click ${this.clickCount} veces`; //Casting
    (evento.target as HTMLElement).innerText = ` Hiciste click ${this.clickCount} veces`; //Casting mas generico
    //(evento.target as any).innerText = ` Hiciste click ${this.clickCount} veces`; //Casting mas generico mas generico
  }

  clickSegundoBotonMagido(boton: HTMLButtonElement) {
    boton.innerText = (parseInt(boton.innerText) + 1).toString();
  }

  cambiarLista() {
    if (this.asistentes.length > 0) {
      this.asistentes = [];
    } else {
      this.asistentes = ["Luis", "Zhao", "Lidia", "Samuel", "Eduardo", "Shutao"];
    }

  }

}