import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurnoModel } from '../models/turno.model';

const URL = "http://localhost:3000/turnos";

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http:HttpClient) { }

  add(turno:TurnoModel):Observable<any>{
    return this.http.post(URL, turno);
  }

  getAll():Observable<TurnoModel[]>{
    return this.http.get<TurnoModel[]>(URL);
  }
}
