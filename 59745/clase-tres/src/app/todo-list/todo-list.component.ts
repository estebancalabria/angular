import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  nombreTareaNueva: string = "";

  tareas = [
    { id: 1, nombre: "Irse de vacacion a Islas de Pascua", done: false },
    { id: 2, nombre: "Sacar la basura", done: false },
    { id: 3, nombre: "Ir al dentista", done: false },
    { id: 4, nombre: "Jugar al League of legends", done: false }
  ]

  constructor() { }

  inputChange(event: any) {
    this.nombreTareaNueva = event.target.value;
  }
  
  eliminarTarea(id:number){
    this.tareas = this.tareas.filter(t => t.id != id)
  }

  agregarTarea(event: any) {
    if (this.nombreTareaNueva.length > 0) {
      let tareaNueva = {
        id: Math.max(...this.tareas.map(t => t.id), 0) + 1,
        nombre: this.nombreTareaNueva,
        done: false
      }

      this.tareas.push(tareaNueva);

      this.nombreTareaNueva = "";
    }
  }

  agregarTareaDesdeAfuera(nombre:string){
    if (nombre.length > 0) {
      let tareaNueva = {
        id: Math.max(...this.tareas.map(t => t.id), 0) + 1,
        nombre: nombre,
        done: false
      }

      this.tareas.push(tareaNueva);
    }
  }

  ngOnInit(): void {
  }
}
