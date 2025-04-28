import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  nombre:string = "";

  @Output()
  lanzarTarea : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event:any){
    this.nombre = event.target.value;
  }

  notificarAgregarTarea(){
    this.lanzarTarea.emit(this.nombre);
    this.nombre = "";
  }

}
