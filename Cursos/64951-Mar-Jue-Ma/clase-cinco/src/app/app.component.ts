import { Component, ViewChild } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TodoListComponent) todoList!: TodoListComponent; //Con !

   recibirTareaNueva(tarea:Tarea){
      this.todoList.agregarTarea(tarea);
   }
}
