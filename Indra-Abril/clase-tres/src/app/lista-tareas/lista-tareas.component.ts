import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { EstadoTareaModel } from '../models/estado-tarea.model';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [NgFor, 
    NgIf,
    NgStyle,
    //No son necesiarios los siguientes si uso el @switch de Angular 17
    //NgSwitch, 
    //NgSwitchCase,
    //NgSwitchDefault
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  //Asi puedo acceder al enumerado desde el template
  public readonly EstadoTarea = EstadoTareaModel;

  @Input() tareas : TareaModel[] = [];
  @Output() eliminar : EventEmitter<TareaModel> = new EventEmitter<TareaModel>();

  getColorTareaSegunEstado(tarea : TareaModel){
    switch (tarea.estado) {
      case EstadoTareaModel.Pendiente:
        return 'red';
      case EstadoTareaModel.EnCurso:
        return'yellow';
      case EstadoTareaModel.Completada:
        return 'green';
      default:
        return 'black';
    }
  }

  eliminarTarea(tarea:TareaModel){

    //OJO. El que maneja la lista de tareas es el padre
    //Si reemplazo mi lista de tareas con una nueva el padre no se entera
    //Por eso es que voy a gener que usa un evento
    //Vemos que lo borra pero despues se me rompe al agregar
    //this.tareas = this.tareas.filter(t => t.id !== tarea.id);
    this.eliminar.emit(tarea);
  }
}
