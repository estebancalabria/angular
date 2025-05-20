import { Injectable } from '@angular/core';
import { LibroInterfaceService } from './libro-interface.service';
import { Observable, of } from 'rxjs';
import { LibroModel } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroMockService extends LibroInterfaceService {

  override getLibros(): Observable<LibroModel[]> {
    return of([
   {
            "id": 1,
            "titulo": "Ejemplo 1",
            "autor": "Autor 1",
            "publicacion": 1943,
            "genero": "Ficción"
        },
        {
            "id": 2,
            "titulo": "Ejemplo 2",
            "autor": "Autor 2",
            "publicacion": 1967,
            "genero": "Realismo mágico"
        }
    ]);
  }
}
