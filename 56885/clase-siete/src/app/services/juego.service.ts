import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JuegoModel } from '../models/juego.model';

const URL = "http://localhost:3001/juegos";

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http : HttpClient) { }

  getAll():Observable<JuegoModel[]>{
    return this.http.get<JuegoModel[]>(URL);
  }

  getById(id:number):Observable<JuegoModel>{
    return this.http.get<JuegoModel>(URL + "/" + id);
  }
}
