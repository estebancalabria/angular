import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacto.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export abstract class ContactoServiceInterface {

    abstract getContactos(): Observable<ContactoModel[]>;

    abstract agregar(nuevo: ContactoModel): Observable<any>;

    abstract eliminar(id: number): Observable<any>;
}