import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    { id: 1, nombre: "Detergente", descripcion: "Para dejar los platos hemosos" },
    { id: 2, nombre: "Cera", descripcion: "Para dejar los pisos hermosos" },
    { id: 3, nombre: "Camperita", descripcion: "Porque hace frio" },
  ]

  getAll(): Observable<Producto[]> {
    return new Observable((obs: Observer<Producto[]>) => {
      obs.next(this.productos);
      obs.complete();
    });
  }

  get(id:number): Observable<Producto> {
    return new Observable((obs: Observer<Producto>)=>{
        this.productos.forEach((p)=>{
           (p.id === id) && obs.next(p);
           /*
            if (p.id === id) {obs.next(p);}
           */
        });
        obs.complete();
    })
  }
}
