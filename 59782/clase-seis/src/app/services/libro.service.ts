import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LibroModel from '../models/libro.model';

const URL = "http://localhost:3000/libros";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http : HttpClient) { }

  /*getAll():Observable<any>{
    return this.http.get(URL);
  }*/

  getAll():Observable<LibroModel[]>{
    return this.http.get<LibroModel[]>(URL);
  }

  get(id:number):Observable<LibroModel>{
    return this.http.get<LibroModel>(URL + "/" + id);
  }

  update(libro:LibroModel):Observable<any>{
    return this.http.put(URL + "/" + libro.id, libro);
  }
}
