import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() agregar : EventEmitter<TareaModel> = new EventEmitter<TareaModel>();

  /*clickBotonAgregarTarea(nombreTarea:string){
      alert("Se agrega la tarea");
  }*/
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
