import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: PersonaService) {
    /* this.formulario = new FormGroup({
       nombre: new FormControl("Esteban", Validators.required),
       apellido: new FormControl("Calabria", Validators.required),
     })*/

    this.formulario = formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      apellido: ["", Validators.required],
    });
  }

  demoLlenarForm() {
    this.formulario.get("nombre")?.setValue("Juan");
    this.formulario.get("apellido")?.setValue("De Los Palotes");
  }

  agregarNueva() {
    if (this.formulario.valid) {
      this.service.add({
        id: 0,
        nombre: this.formulario.get("nombre")?.value,
        apellido: this.formulario.get("apellido")?.value,
      }).subscribe(() => {
        //alert("Parece que se agrego todo bien");
        //this.formulario.reset();
        location.reload();
      })
    }
  }
}
