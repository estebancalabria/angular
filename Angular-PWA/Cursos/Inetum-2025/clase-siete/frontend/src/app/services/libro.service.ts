import { Injectable } from '@angular/core';
import { LibroModel } from '../models/libro.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  API_URL = 'http://localhost:3000/api/libros';

  constructor(private http : HttpClient) { }

  getAll() : Observable<LibroModel[]> {
    return this.http.get<LibroModel[]>(this.API_URL);
    /*return  of([
      { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
      { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
      { id: 3, title: '1984', author: 'George Orwell' },
      { id: 4, title: 'El gran Gatsby', author: 'F. Scott Fitzgerald' }
    ]);*/
  }

  getById(id: number) : Observable<LibroModel> {
    return this.http.get<LibroModel>(`${this.API_URL}/${id}`);
  }

  add(libro: LibroModel) : Observable<LibroModel> {
    return this.http.post<LibroModel>(this.API_URL, libro);
  }

  delete(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

}
