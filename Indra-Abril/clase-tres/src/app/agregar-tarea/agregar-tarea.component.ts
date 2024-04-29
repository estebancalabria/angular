import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { EstadoTareaModel } from '../models/estado-tarea.model';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {

  //Al igual que java, typescript soporta genericos
  @Output() agregar: EventEmitter<TareaModel> = new EventEmitter<TareaModel>();
  @ViewChild(HTMLInputElement) inputNombreTarea?: HTMLInputElement;

  clickBotonAgregarTareaConString(nombre: string) {
    //Precondiciones
    if (nombre == null || nombre.trim().length == 0) {
      return;
    }

    //Esta tarea nueva se la quiero pasar al componente padre
    let tareaNueva = new TareaModel(nombre, EstadoTareaModel.Pendiente);

    //el Emmit invoca el evento
    this.agregar.emit(tareaNueva);

    //Me gusta mas esta verion de pasar el input entero para poder limpuarlo luego
    //inputTarea.value = ""; Esta linea no la puedo hacer 
    this.inputNombreTarea && (this.inputNombreTarea!.value = "");
  }

  clickBotonAgregarTarea(inputTarea: HTMLInputElement) {
    //Precondiciones
    if (inputTarea.value == null || inputTarea.value.trim().length == 0) {
      return;
    }

    //Esta tarea nueva se la quiero pasar al componente padre
    let tareaNueva = new TareaModel(inputTarea.value, EstadoTareaModel.Pendiente);

    //el Emmit invoca el evento
    this.agregar.emit(tareaNueva);

    //Me gusta mas esta verion de pasar el input entero para poder limpuarlo luego
    inputTarea.value = "";
  }
}
