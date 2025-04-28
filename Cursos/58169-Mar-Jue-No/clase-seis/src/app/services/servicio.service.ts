import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioModel } from '../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ServicioModel[]>{
    return this.http.get<ServicioModel[]>("http://localhost:3000/servicios");
  }
}
