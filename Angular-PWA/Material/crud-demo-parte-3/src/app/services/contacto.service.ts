import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacto.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactos: ContactoModel[] = [ {
    id: 1,
    documento: 12345678,
    nombreUsuario: 'juanperez',
    password: 'password123',
    email: 'juan.perez@example.com',
    fechaDeNacimiento: new Date('1990-01-01')
  },
  //...
  ];

  constructor() {}

  obtenerContactos(): Observable<ContactoModel[]> {
    return of(this.contactos);
  }

  obtenerContactoPorId(id: number): Observable<ContactoModel | undefined> {
    const contacto = this.contactos.find(c => c.id === id);
    return of(contacto);
  }

  agregarContacto(contacto: ContactoModel): void {
    this.contactos.push(contacto);
  }

  actualizarContacto(contacto: ContactoModel): void {
    const index = this.contactos.findIndex(c => c.id === contacto.id);
    if (index !== -1) {
      this.contactos[index] = contacto;
    }
  }

  eliminarContacto(id: number): void {
    this.contactos = this.contactos.filter(c => c.id !== id);
  }
}
