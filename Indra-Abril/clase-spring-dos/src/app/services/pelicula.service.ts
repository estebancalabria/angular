import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaModel } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http:HttpClient) { }

  addPelicula(pelicula:PeliculaModel):Observable<PeliculaModel>{
    return this.http.post<PeliculaModel>("http://localhost:5000/api/pelicula", pelicula);
  }

  getPeliculas():Observable<PeliculaModel[]>{
    return this.http.get<PeliculaModel[]>("http://localhost:5000/api/pelicula");
  }
}
