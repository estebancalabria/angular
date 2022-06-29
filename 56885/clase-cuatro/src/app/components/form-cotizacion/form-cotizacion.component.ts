import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cotizacion',
  templateUrl: './form-cotizacion.component.html',
  styleUrls: ['./form-cotizacion.component.css']
})
export class FormCotizacionComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    /*this.form = new FormGroup({
      id : new(1),
      moneda: new FormControl("Dolar"),
      fecha: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en")),
      simbolo: new FormControl("u$d"),
      cotizacion: new FormControl(237),
    })*/
    this.form = formBuilder.group({
      id : [1, Validators.required],
      moneda: ["Dolar", [Validators.required, Validators.minLength(3)]],
      fecha: [formatDate( Date(), "yyyy-MM-dd", "en")],
      simbolo: ["u$d", [Validators.required, Validators.maxLength(4)]],
      cotizacion: [237, Validators.min(10)]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    //Para mostrar que puedo manejar el formulario desde el codigo
    //this.form.controls["moneda"].setValue("Modificado por condigo");
    this.form.get("moneda")?.setValue("Modificado por condigo");
  }

}
