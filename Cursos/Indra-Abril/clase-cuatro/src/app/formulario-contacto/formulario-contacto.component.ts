import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoModel } from '../models/contacto.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.css'
})
export class FormularioContactoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    //Forma 1 de crear el form group
    /*this.form = new FormGroup({
      nombre : new FormControl<string>("Esteban"),
      correo : new FormControl<string>("mct.esteban.calabria@gmail.com"),
      //Gracias Stack overflow
      fechaDeNacimiento : new FormControl<string>(new Date(1980,9,20).toISOString().split('T')[0]),
       //fechaDeNacimiento : new FormControl<Date>(new Date(1980,9,20)),
      //fechaDeNacimiento : new FormControl<string>("1980-09-20"),
      cantidadHijos : new FormControl<number>(0),
      genero : new FormControl("masculino")
    })*/

    //forma 2 - A partir de un objeto de negocio instanciado
    //        -Contra : no le podemos poner los validators
    let contacto: ContactoModel = {
      nombre: "Elon Musk",
      correo: "elon@tesla.com",
      cantidadHijos: 9,
      fechaDeNacimiento: new Date(1971, 5, 28),
      genero: "masculino"
    }

    this.form = fb.group(contacto);
    this.form.get("fechaDeNacimiento")?.patchValue(contacto.fechaDeNacimiento.toISOString().split('T')[0])


    //Hagoque todos los campo sean requeridos en una sola line
    //for ( const c in this.form.controls) { this.form.controls[c].addValidators(Validators.required)}

    //Si paso varios validators le paso un array con [], sino le paso directamente un solo validador
    this.form.get("nombre")?.addValidators([Validators.required,
    //Longitud entre 2 y 10
    Validators.minLength(2), Validators.maxLength(10),
    //Empieza con mayuscula y no tiene espcios
    Validators.pattern(/^[A-Z][a-z]*$/)]);

    this.form.get("correo")?.addValidators([Validators.required, Validators.email]);

    //Me mata los numeros con coma
    this.form.get("cantidadHijos")?.addValidators([Validators.required,
    //Que este entre 0 y 10
    Validators.min(0), Validators.max(10),
    //Que no tenga 3 hijos
    (c : AbstractControl) => ( (c.value==3) ? {noSePuedenTresHijos:true}: null  )]
  );
  
  
  

    this.form.get("fechaDeNacimiento")?.addValidators([Validators.required]);
    this.form.get("genero")?.addValidators([Validators.required]);


    //forma 3 - crear los formularios...misterio misterio... ya la vamos a ver...
  }

  sugerirNombre() {
    this.form.get("nombre")?.setValue((Math.random() * 10000).toString());
  }
}
