import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoMockService {

  private productos : ProductoModel[] = [
    {id:0,nombre: 'Secreto con Id 0', precio:100},
    {id:1,nombre: 'Ferrari', precio:100},
    {id:2,nombre: 'Ford Fiesta', precio:200},
    {id:3,nombre: 'Tesla', precio:300},
    {id:4,nombre: 'Fiat Multipla', precio:400},
    {id:5,nombre: 'Mazda 2', precio:500},
  ]

  constructor() { }

  getById(id:number) : Observable<ProductoModel>{  
    return (id >= this.productos.length) 
      ? throwError(() => new Error("No existe")) 
      : of(this.productos[id]);
  }

  getAll() : Observable<ProductoModel[]>{    
    return of(this.productos);
  }

  add(producto:ProductoModel) : Observable<ProductoModel>{    
    this.productos.push(producto);
    return of(producto);
  }

  update(producto:ProductoModel) : Observable<ProductoModel>{    
    this.productos[producto.id] = producto;
    return of(producto);
  }

  delete(id:number) : Observable<boolean>{    
    this.productos.splice(id,1);
    return of(true);
  }

}
