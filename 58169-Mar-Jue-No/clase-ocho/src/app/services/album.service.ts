import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiguritaModel } from '../models/figurita.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getFigus(): Observable<FiguritaModel[]> {
    return this.http.get<FiguritaModel[]>("http://localhost:3000/jugadores");
  }

  getFig(id: number): Observable<FiguritaModel> {
    return this.http.get<FiguritaModel>("http://localhost:3000/jugadores/" + id);
  }

  actualizar(figu: FiguritaModel): Observable<any> {
    return this.http.put("http://localhost:3000/jugadores/" + figu.id,
      figu)
  }
}
