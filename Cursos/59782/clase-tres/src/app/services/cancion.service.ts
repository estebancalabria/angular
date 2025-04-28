import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CancionModel } from '../models/cancion.model';


const canciones: CancionModel[] = [
  { id: 1, nombre: "Smells Like Teen Spirit", fechaRelease: new Date(), segundosDuracion: 120 },
  { id: 2, nombre: "Stronger", fechaRelease: new Date(), segundosDuracion: 120 },
  { id: 3, nombre: "Piano Bar", fechaRelease: new Date(), segundosDuracion: 120 },
  { id: 4, nombre: "In Bloom", fechaRelease: new Date(), segundosDuracion: 120 }
]

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  public getAll(): Observable<CancionModel[]> {
    return new Observable((observer: Observer<CancionModel[]>) => {
      observer.next(canciones);
    })
  }

  public get(id: number): Observable<CancionModel> {
    return new Observable((observer: Observer<CancionModel>) => {
      observer.next(canciones[id - 1]);
    })
  }
}
