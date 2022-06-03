import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JuegoModel } from '../models/juego.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<JuegoModel[]>{
    return this.http.get<JuegoModel[]>("http://localhost:3000/juegos");
  }

  public get(id:Number):Observable<JuegoModel>{
    return this.http.get<JuegoModel>("http://localhost:3000/juegos/"+id);
  }

  public update(juego:JuegoModel):Observable<any>{
    return this.http.put("http://localhost:3000/juegos/"+juego.id, juego);
  }
}
