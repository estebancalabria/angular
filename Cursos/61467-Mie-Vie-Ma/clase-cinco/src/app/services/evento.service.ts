import { Injectable } from '@angular/core';
import { EventoModel } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  add(evento:EventoModel):void{
      //Por ahora devuelvo un void pero esto despues cambia
      //aca envio el evento al backend
  }
}
