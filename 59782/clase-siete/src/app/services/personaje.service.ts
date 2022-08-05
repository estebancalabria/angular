import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajeModel } from '../models/personaje.model';

const URL = "http://localhost:3000/personajes/";

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http:HttpClient) { }

  get(id:number):Observable<PersonajeModel>{
    return this.http.get<PersonajeModel>(URL + id);
  }
}
