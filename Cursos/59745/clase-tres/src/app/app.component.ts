import { Component, ViewChild } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TodoListComponent) todoList!:TodoListComponent;

  title = 'clase-tres';

  recibirTarea(tarea:string){
    this.todoList.agregarTareaDesdeAfuera(tarea);
  }
}
