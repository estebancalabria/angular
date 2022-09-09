import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ProveedorModel from '../models/proveedor.model';

const URL = "http://localhost:3001/proveedores";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ProveedorModel[]>{
     return this.http.get<ProveedorModel[]>(URL); 
  }

  get(id:number):Observable<ProveedorModel>{
    return this.http.get<ProveedorModel>(URL + "/" + id); 
  }

  update(proveedor:ProveedorModel):Observable<any>{
    return this.http.put(URL + "/" + proveedor.id, proveedor);
  }

  add(proveedor:ProveedorModel):Observable<ProveedorModel>{
    return this.http.post<ProveedorModel>(URL, proveedor);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(URL + "/" + id); 
  }
}
