import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PartidoModel from '../models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<PartidoModel[]>{
    return this.http.get<PartidoModel[]>("https://world-cup-json-2018.herokuapp.com/matches");
  }
}
