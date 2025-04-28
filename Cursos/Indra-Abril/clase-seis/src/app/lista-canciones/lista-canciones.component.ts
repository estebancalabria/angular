import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CancionModel } from '../../models/cancion.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-lista-canciones',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatTableModule],
  templateUrl: './lista-canciones.component.html',
  styleUrl: './lista-canciones.component.css'
})
export class ListaCancionesComponent implements OnInit{

  canciones : CancionModel[] = [];
  
  //El http client se usa en remplazo de la Api fetch
  //Aca lo recibo por injection de dependencias
  constructor(private http : HttpClient) { 
    //No hacer llamadas asincronicas en el constructor
  }

  //Este metodo se ejecuta cuando el componente se inicializa
  //Las llamadas a una api se hacen aca
  ngOnInit(){
    //Esta es la forma tradicional de javascript en hacer llamadas async
    /*fetch("http://localhost:3000/cancion").then((resp)=>{

    });*/

    //Aca hago la llamada a la api
    //Se usa subscribe en lugar de then
    this.http.get<CancionModel[]>("http://localhost:3000/cancion").subscribe((data) => {
      this.canciones = data;
    });
  }
}
