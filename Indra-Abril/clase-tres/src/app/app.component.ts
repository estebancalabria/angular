import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareaModel } from './models/tarea.model';
import { EstadoTareaModel } from './models/estado-tarea.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase-tres';

  constructor(){

    //Puedo hacerlo de las dos maneras en codigo, aunque no en el template
    let tarea1 = new TareaModel("ddsds");
    let tarea2 = new TareaModel("ddsds", EstadoTareaModel.Pendiente);
    //tarea.nombre = "ddssds";
    //tarea.nombre;
  }
}
