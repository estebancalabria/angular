import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas = [
    { id: 1, nombre: "Aprender Angular", done: false },
    { id: 2, nombre: "Frenar Costeo", done: true },
    { id: 3, nombre: "Pasar Parametro con componente", done: false }
  ]

  nombreTareaNueva: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  modificarInput(evento: any) {
    if (evento.key === "Enter") {
      this.agregarTareaNueva();
    } else {
      this.nombreTareaNueva = evento.target.value;
    }
  }

  eliminarTarea(id: number) {
    if (confirm("Seguro de eliminar la tarea")) {
      this.tareas = this.tareas.filter(t => t.id != id);
    }
  }

  cambiarEstadoTarea(tarea: any) {
    tarea.done = !tarea.done;
  }

  agregarTareaNueva() {
    if (this.nombreTareaNueva.length > 0) {
      this.tareas.push({
        id: Math.max(...this.tareas.map(t => t.id), 0) + 1,
        nombre: this.nombreTareaNueva,
        done: false
      });

      this.nombreTareaNueva = "";
    }
  }

}
