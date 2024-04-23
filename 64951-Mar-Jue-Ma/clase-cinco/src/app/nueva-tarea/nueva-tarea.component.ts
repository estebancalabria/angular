import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent {
    nombreTareaNueva : string = "";

    @Output()
    agregarTarea : EventEmitter<Tarea> = new EventEmitter();

    cambiarInput(evt:Event){
      this.nombreTareaNueva = (evt.target as HTMLInputElement).value;
    }

    btnAgregarClick(){
        if (this.nombreTareaNueva.length>0){

           let tareaNueva: Tarea = {
              id : 0,
              nombre : this.nombreTareaNueva,
              autor : "Desconocido",
              done : false
           }

           this.agregarTarea.emit(tareaNueva);

           this.nombreTareaNueva = "";
        }
    }
}
