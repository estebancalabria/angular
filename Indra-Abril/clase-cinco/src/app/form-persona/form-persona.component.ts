import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VistaModule } from '../vista/vista.module';
import {  PropNames, objectProps } from '../utils/strong-typed-props';
import { PersonaModel } from '../models/persona.model';

@Component({
  selector: 'app-form-persona',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, VistaModule],
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {
  form : FormGroup;
  persona? : PersonaModel;
  Campos : PropNames<PersonaModel> = objectProps<PersonaModel>(new PersonaModel("","PM","","",new Date()));

  constructor(private fb : FormBuilder) {
    /*this.form = new FormGroup({
      nombre: new FormControl(''),
      cargo: new FormControl(''),
      imagen: new FormControl(''),
      description: new FormControl(''),
      fechaDeNacimiento: new FormControl('')*/
    this.form = this.fb.group({
      nombre: '',
      cargo: '',
      imagen: '',
      description: '',
      fechaDeNacimiento: new Date(1980,1,1)
    });
  }

  editar(persona : PersonaModel) {
    this.persona = persona;
    this.form.setValue(persona);
  }

  confimarCambios(){

    if (this.persona){
      this.persona!.copiarDesde!(this.form.value);
      this.form.reset();
      this.persona = undefined;
    }
  }
}
