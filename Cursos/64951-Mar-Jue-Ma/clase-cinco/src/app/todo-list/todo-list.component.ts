import { Component, Input } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    @Input()
    tareas : Tarea[] = [];

    agregarTarea(tarea:Tarea){
      this.tareas.push(tarea);
    }
}
