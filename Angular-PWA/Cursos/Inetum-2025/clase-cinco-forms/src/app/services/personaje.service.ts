import { Injectable } from '@angular/core';
import { PersonajeModel } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor() { }

  agregarPersonaje(personaje: PersonajeModel) {
    //Aca se agrega el peronaje mandandolo a la api para que lo guarde en la base de datos
    alert("Personaje grabado correctamente: " + personaje.nombre);
  }

}
