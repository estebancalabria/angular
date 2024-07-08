import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacto.model';
import { GeneroModel } from '../models/genero.models';
import { Observable, of } from 'rxjs';
import { ContactoServiceInterface } from './contacto.service.interface';

//Lo puedo recibir por inyeccion de dependencias en el constructor
@Injectable({
  providedIn: 'root'
})
export class ContactoService extends ContactoServiceInterface {

  private contactos: ContactoModel[] = [
    { id: 1, documento: 123, nombre: 'Juan', fechaNacimiento: new Date(), genero: GeneroModel.Masculino },
    { id: 2, documento: 456, nombre: 'Maria', fechaNacimiento: new Date(), genero: GeneroModel.Femenino },
    { id: 3, documento: 789, nombre: 'Pedro', fechaNacimiento: new Date(), genero: GeneroModel.Masculino }
  ]

  constructor() {
    super();
   }

  //Si contactos fuera a una api...
  //
  override getContactos() : Observable<ContactoModel[]> {
    //Llamada asincronica con promesas
    //fetch("http://blablsa").then()
    return of(this.contactos);
  }

  override agregar(nuevo : ContactoModel) : Observable<any>{
      nuevo.id =  Math.max(...this.contactos.map(c => c.id), 0 ) + 1;
      this.contactos.push(nuevo);
      return of("OK");
  }

  override eliminar(id: number) : Observable<any>{
    this.contactos = this.contactos.filter(c => c.id!== id);
    return of("OK");
  
  }

  override modificar(contacto: ContactoModel) : Observable<any>{
    this.contactos[this.contactos.findIndex(c => c.id == contacto.id)] = contacto;
    return of("OK");
  }
  

}
