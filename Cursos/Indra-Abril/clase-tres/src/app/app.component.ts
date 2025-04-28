import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareaModel } from './models/tarea.model';
import { EstadoTareaModel } from './models/estado-tarea.model';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, ListaTareasComponent, AgregarTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public readonly EstadoTarea = EstadoTareaModel;

  tareas : TareaModel[] = [];
  @ViewChild(ListaTareasComponent) listarTareas? : ListaTareasComponent;

  constructor(){
    //JSON style (No me dejq los parametros por defecto de contructores :( )
    /*this.tareas = [ 
      {nombre:'Tarea1', estado : this.EstadoTarea.Pendiente}, 
      {nombre:'Tarea2', estado : this.EstadoTarea.EnCurso},
      {nombre:'Tarea3', estado : this.EstadoTarea.Completada}  ];*/
    
    //TypeScript style
    this.tareas = [
      new TareaModel('Tarea1'), 
      new TareaModel('Tarea2', this.EstadoTarea.EnCurso),
      new TareaModel('Tarea3', this.EstadoTarea.Completada)  
    ];


    //Puedo hacerlo de las dos maneras en codigo, aunque no en el template
    //let tarea1 = new TareaModel("ddsds");
    //let tarea2 = new TareaModel("ddsds", EstadoTareaModel.Pendiente);
  }

  agregarTarea(tarea: TareaModel){
    this.tareas.push(tarea);
    //Quiero llamar al mostar notificacion del componente listarTareas
    this.listarTareas && this.listarTareas!.mostrarNotificacion();
  }

  eliminarTarea(tarea: TareaModel){
    this.tareas = this.tareas.filter(t => t.id !== tarea.id);
  }
}
