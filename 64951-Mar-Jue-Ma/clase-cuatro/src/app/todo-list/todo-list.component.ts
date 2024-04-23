import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  nombreTareaNueva : string = "";

  listaTareas = [
    { id: 1, nombre: "Aprender megacursor VSCode", prioridad: 1, done: false },
    { id: 2, nombre: "Contestar Mails", prioridad: 2, done: false },
    { id: 3, nombre: "Resolver ejercicios Alumno", prioridad: 3, done: false }
  ]

  cambiarInput(event:Event){
    //console.log(event.constructor.name);
    //console.log(event);
    this.nombreTareaNueva = (event.target as HTMLInputElement).value;
  }

  agregarTarea(event:Event){
    if (this.nombreTareaNueva.length > 0){

      /*this.listaTareas.push({
        id : this.listaTareas.length+1,
        nombre : this.nombreTareaNueva,
        prioridad : 1,
        done : false
      });*/

      //this.listaTareas.map((t)=>(t.id))
     // alert(Math.max(3,4,5,6,7,85,4,3,2));

      let tareaNueva = {
        //id : this.listaTareas.length+1,
        id : Math.max(0,...this.listaTareas.map((t)=>(t.id)))+1,
        nombre : this.nombreTareaNueva,
        prioridad : 1,
        done : false
      };

      this.listaTareas = [...this.listaTareas, tareaNueva];

      this.nombreTareaNueva = "";
    }
  }

  borrarTarea(id:number){
      //alert("Se borra la tarea con id " + id);
      this.listaTareas = this.listaTareas.filter((elem)=>(elem.id !== id));
  }


}
