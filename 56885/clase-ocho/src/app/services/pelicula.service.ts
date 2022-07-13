import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaModel } from '../models/pelicula.model';

const URL = "http://localhost:3000/peliculas";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http:HttpClient) { }

  getAll():Observable<PeliculaModel[]>{
    return this.http.get<PeliculaModel[]>(URL);
  }

  get(id:number):Observable<PeliculaModel>{
    return this.http.get<PeliculaModel>(URL + "/" + id);
  }

  add(pelicula:PeliculaModel):Observable<any>{
    return this.http.post(URL, pelicula);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(URL + "/" + id);
  }

  update(pelicula:PeliculaModel):Observable<any>{
    return this.http.put(URL + "/" + pelicula.id, pelicula);
  }
}
