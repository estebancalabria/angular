import { Component, OnInit } from '@angular/core';
import { Prioridad, TareaModel } from 'src/app/models/tarea.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas : TareaModel[] = [
    new TareaModel("Analisis",Prioridad.Alta, false),
    new TareaModel("Desarrollo",Prioridad.Media, false),
    new TareaModel("Test",Prioridad.Baja, false),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(nombre:string){
    if (nombre.length>0){
       let nueva = new TareaModel(nombre, Prioridad.Media, false);
       this.tareas.unshift(nueva);
    }
  }

  eliminarTarea(id:number){
    Swal.fire({
      title:"Desea eliminar la tarea?",
      showCancelButton:true,
      showConfirmButton:true
    }).then((resp)=>{
       resp.isConfirmed && (this.tareas = this.tareas.filter(t => t.id !== id));
    })
    
  }

}
