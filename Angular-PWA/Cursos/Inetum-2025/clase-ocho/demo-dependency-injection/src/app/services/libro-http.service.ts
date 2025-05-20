import { Injectable } from '@angular/core';
import { LibroInterfaceService } from './libro-interface.service';
import { LibroModel } from '../models/libro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroHttpService extends LibroInterfaceService {

  URL = 'http://localhost:3001/libros';

  constructor(private http: HttpClient) { 
    super();

  }

  override getLibros(): Observable<LibroModel[]> {
    return this.http.get<LibroModel[]>(this.URL);
  }


}
