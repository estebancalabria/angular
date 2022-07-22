import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CancionModel } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.component.html',
  styleUrls: ['./cancion-form.component.css']
})
export class CancionFormComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder,private service:CancionService) {

    /*this.form = new FormGroup({
      id : new FormControl(),
      nombre : new FormControl("Valor por defecto para pruebas"),
      segundosDuracion : new FormControl(),
      fechaRelease : new FormControl()
    })*/
    this.form = formBuilder.group({
      id:[0],
      nombre:["",[Validators.required]],
      segundosDuracion:[0,[Validators.required, Validators.min(30), Validators.max(600)]],
      fechaRelease:["2020-01-01"]
    })
   }

  ngOnInit(): void {

  }

  levantarCancionAlAzar(){
    this.service.get(3).subscribe((cancion:CancionModel)=>{
      this.form.get("nombre")?.setValue(cancion.nombre);
      this.form.get("segundosDuracion")?.setValue(cancion.segundosDuracion);
      this.form.get("fechaRelease")?.setValue(formatDate(cancion.fechaRelease, "yyyy-MM-dd","en-US"));
    })
  }

}
