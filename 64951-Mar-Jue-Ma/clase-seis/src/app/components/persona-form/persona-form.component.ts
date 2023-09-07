import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent {

  modelo = new Persona(20_000_000, "Elon", new Date(1975, 0, 10)); //10-Ene

  get testData() {
    return JSON.stringify(this.modelo)
  }

  /*submitForm(){
     alert("se procesa el formulario " + JSON.stringify(this.modelo));
  }*/

  submitForm(form: NgForm) {
    if (form.valid) {
      alert("se procesa el formulario " + JSON.stringify(this.modelo));
    } else {
      alert("El formulario es invalido");
    }
  }


}
