import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ProductoModel from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ProductoModel[]>{
    return this.http.get<ProductoModel[]>("http://localhost:3000/productos");
  }
}
