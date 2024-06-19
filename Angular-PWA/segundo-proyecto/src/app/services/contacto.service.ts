import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacto.model';
import { GeneroModel } from '../models/genero.models';
import { Observable, of } from 'rxjs';
import { ContactoServiceInterface } from './contacto.service.interface';

//Lo puedo recibir por inyeccion de dependencias en el constructor
@Injectable({
  providedIn: 'root'
})
export class ContactoService implements ContactoServiceInterface {

  private contactos: ContactoModel[] = [
    { id: 1, documento: 123, nombre: 'Juan', fechaNacimiento: new Date(), genero: GeneroModel.Masculino },
    { id: 2, documento: 456, nombre: 'Maria', fechaNacimiento: new Date(), genero: GeneroModel.Femenino },
    { id: 3, documento: 789, nombre: 'Pedro', fechaNacimiento: new Date(), genero: GeneroModel.Masculino }
  ]

  constructor() { }

  //Si contactos fuera a una api...
  //
  getContactos() : Observable<ContactoModel[]> {
    //Llamada asincronica con promesas
    //fetch("http://blablsa").then()
    return of(this.contactos);
  }

  agregar(nuevo : ContactoModel) : Observable<any>{
      nuevo.id =  Math.max(...this.contactos.map(c => c.id), 0 ) + 1;
      this.contactos.push(nuevo);
      return of("OK");
  }

  eliminar(id:number) : Observable<any>{
    return of();
  }
}
