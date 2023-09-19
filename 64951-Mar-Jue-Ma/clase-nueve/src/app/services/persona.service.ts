import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  add(persona:Persona):Observable<any>{
    return this.http.post("http://localhost:3000/person", persona)
  }

  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>("http://localhost:3000/person");
  }

}
