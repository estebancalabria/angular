import { Injectable } from '@angular/core';
//import { Personaje } from '../models/personaje.model';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../models/api-result.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ApiResult> {

      return this.http.get<ApiResult>("https://rickandmortyapi.com/api/character");

      /*return new Observable( (obs:Observer<Personaje[]>) =>{
          //El next es como el return
          obs.next([
            {id:1, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"},
            {id:2, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"},
            {id:3, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"},
            {id:4, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"}
          ]);
          obs.complete();
      });*/

      /* [
        {id:1, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"},
        {id:2, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"},
        {id:3, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"},
        {id:4, name:"Prueba", gender:"X", species:"Prueba", type:"Prueba", status:"Alive", image:"https://thispersondoesnotexist.com/"}
      ]*/
  }
}
