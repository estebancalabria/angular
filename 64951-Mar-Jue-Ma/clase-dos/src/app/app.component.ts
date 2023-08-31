import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //propiedades de la clase
  titulo: string;
  longitudTitulo : number = 0;
  headerClass : string = "text-center bg-dark text-light p-3";
  premio : String = "";  //puedo escribir tanto string como String

  //constructor
  constructor() {
      this.titulo = "Bienvenidos a Angular Clase Dos";

      setInterval(()=>{
        this.longitudTitulo++;
        if (this.longitudTitulo>this.titulo.length){
          this.longitudTitulo = 1
        }
      }, 400);
  }

  realizarSorteo(){
     let azar = Math.random();
     if (azar>0.5){
        this.premio = "Has ganado un Iphone, dejanos tu correo para ir a retirarlo";
     }else{
        this.premio = "Lo lamento, segui participando";
     }
  }

}
