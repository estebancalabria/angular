import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<PersonaModel[]>{
    return this.http.get<PersonaModel[]>("http://localhost:3000/personas");
  }

  public add(persona:PersonaModel):Observable<any>{
    return this.http.post("http://localhost:3000/personas", persona);
  }
}
