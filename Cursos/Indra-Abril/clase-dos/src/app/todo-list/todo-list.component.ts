import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  tareas: string[] = ["Imputar las horas", "Hacer la encuesta del dia", "Practicar Angular con Esteban"];
  mensajeError : string = "";

  eliminarTarea(tarea: string) {
    Swal.fire({
      title: "Desea borrar la tarea?",
      text: tarea,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy Seguro!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.tareas = this.tareas.filter(t => t !== tarea);

        //El filter es lo mismo que hacer...
        /*this.tareas.filter( function(t){
          return t!==tarea;
        });*/
        
        Swal.fire({
          title: "Eliminada!",
          text: "La tarea ha sido eliminada.",
          icon: "success"
        });
      }
    });    
  }

  //agregarTarea(evento:MouseEvent){
  //agregarTarea(input:HTMLInputElement){
  agregarTarea(tarea:string) : boolean {

    if (tarea.length==0){
        this.mensajeError = "No se pueden agregar elementos vacios!";
        return false;
    }

    if (this.tareas.indexOf(tarea) != -1){
        this.mensajeError = `Ups! La tarea ${tarea} ya existe! `;
        return false;
    }

    //this.tareas.push(tarea);
    

    //Spread operator
    // ...[1,2,3,4] =>  1,2,3,4
    this.tareas = [...this.tareas, tarea];
    
    //Crear la lista sin los duplicados 
    //this.tareas = [...new Set([...this.tareas, tarea])]; //Evitar duplicados

    this.mensajeError = "";
    return true;
  }
}
