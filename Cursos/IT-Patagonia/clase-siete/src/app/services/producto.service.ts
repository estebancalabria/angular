import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ProductoModel from '../models/producto.model';

const URL = "http://localhost:3000/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ProductoModel[]>{
    return this.http.get<ProductoModel[]>(URL);
  }

  get(id:number):Observable<ProductoModel>{
    return this.http.get<ProductoModel>(URL + "/" + id)
  }

  add(producto:ProductoModel):Observable<any>{
    return this.http.post(URL,producto);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(URL + "/"  + id);
  }

  edit(producto:ProductoModel):Observable<any>{
    return this.http.put(URL + "/" + producto.id, producto);
  }
}
