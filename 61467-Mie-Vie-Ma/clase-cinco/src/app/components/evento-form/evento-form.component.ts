import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventoModel } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  form : FormGroup;

  constructor(
    private formBuilder : FormBuilder, 
    private service:EventoService) { 

    /*this.form = new FormGroup({
      id : new FormControl<number>(1),
      nombre : new FormControl<string>(""),
      fecha : new FormControl<Date>(new Date()),
      cantidadEntradas : new FormControl<number>(0)
    })*/

    /*this.form = formBuilder.group({
      id : 1,
      nombre : ["", [Validators.required, Validators.minLength(5)]],
      //fecha : [formatDate(new Date(),'yyyy-MM-dd','en-US'), Validators.required],
      cantidadEntradas : 0
    });*/

    this.form = formBuilder.group<EventoModel>({
      id : 1,
      nombre : "",
      fecha : new Date(),
      cantidadEntradas : 0
    });

    //tambien las podemos agregar despues
    this.form.get("nombre")?.addValidators([Validators.required, Validators.minLength(5)]);
    this.form.get("cantidadEntradas")?.addValidators(Validators.required);
    this.form.get("cantidadEntradas")?.addValidators(Validators.min(10));
  }

  ngOnInit(): void {
  }

  submitForm(){
    if (this.form.valid){
      this.service.add(this.form.value);
      Swal.fire("Confirmacion", "El evento se ha registrado", "success")
    }else{
      Swal.fire("Error", "Corrija el formulario antes de continuar", "error")
    }
  }

  incMes(){
    let date = new Date(this.form.get('fecha')?.value);
    date.setMonth(date.getMonth()+1)
    this.form.get('fecha')?.setValue(formatDate(date,'yyyy-MM-dd','en-US'));
  }

}
