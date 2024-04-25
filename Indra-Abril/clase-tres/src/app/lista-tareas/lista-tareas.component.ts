import { Component, Input } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase,NgSwitchDefault],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  @Input() tareas : TareaModel[] = [];
}
