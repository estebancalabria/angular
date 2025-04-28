import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MascotaModel } from 'src/app/models/mascota.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {

  mascota : MascotaModel = new MascotaModel(1,"Firulais", new Date(2010,0,10), 1);

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form:NgForm){
     if (form.valid){
        Swal.fire("Gracias",` ${this.mascota.nombre} mueve la cola de contento! `,"success")
     }else{
      Swal.fire(":(",`Debe Completar los datos correctamente`,"error")
     }
  }

}
