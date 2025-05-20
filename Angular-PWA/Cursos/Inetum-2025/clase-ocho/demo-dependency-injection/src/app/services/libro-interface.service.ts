import { Injectable } from '@angular/core';
import { LibroModel } from '../models/libro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class LibroInterfaceService {
  abstract getLibros(): Observable<LibroModel[]>;

  //Le agregariamos el resto de los metodos que necesitemos
}
