import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IncripcionModel } from 'src/app/models/incripcion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent implements OnInit {

  inscripcion : IncripcionModel = new IncripcionModel("", 
  "mct.esteban.calabria@gmail.com",
  39145666)

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:NgForm){
    if (form.valid){
      Swal.fire("Confirmacion", "Gracias por Registrarse en el curso", "success");
      form.reset();
    }else{
      Swal.fire("Error", "Datos Incorrectos", "error");
    }
  }

}
