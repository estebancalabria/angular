import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LibroModel } from '../modelo/libro.model';
import { LibroServiceInterface } from './libro.service.interface';

const URL = "http://localhost:3000/libros";

@Injectable({
  providedIn: 'root'
})
export class LibroHttpService implements LibroServiceInterface {

  constructor(private http:HttpClient) { }

  getAll():Observable<LibroModel[]>{
    return this.http.get<LibroModel[]>(URL);
  }
}
