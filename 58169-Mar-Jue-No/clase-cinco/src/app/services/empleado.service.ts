import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { EmpleadoModel } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  agregar(empleado:EmpleadoModel):Observable<any>{
    return new Observable( (obs:Observer<any>)=>{
        //Aca lo mandaria al backend para guardarlo en la base de datos
        obs.next(empleado);
    })
  }
}
