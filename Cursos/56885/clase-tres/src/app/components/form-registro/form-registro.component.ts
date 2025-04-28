import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  modelo : UsuarioModel = new UsuarioModel(1, "Elon Musk", 1234, new Date(2020,2,2));
  @Output() submitForm:EventEmitter<UsuarioModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  procesarForm(){
    alert("Se va a enviar el formulario");
    this.submitForm.emit(this.modelo);
  }

}
