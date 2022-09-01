import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurnoModel } from 'src/app/models/turno.model';
import { TurnoService } from 'src/app/services/turno.service';
import { _$ } from 'src/app/utils/props.util';
import Swal from "sweetalert2";

@Component({
  selector: 'app-turno-form',
  templateUrl: './turno-form.component.html',
  styleUrls: ['./turno-form.component.css']
})
export class TurnoFormComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private service: TurnoService) { 
    this.form = this.formBuilder.group({
      id:0,
      nombre:'',
      especialidad:"",
      desdeDia : null,
      desdeHora : null,
      hastaDia : null,
      hastaHora: null
    });

    this.form.get(_$<TurnoModel>().nombre)?.addValidators([Validators.required]);
    this.form.get(_$<TurnoModel>().especialidad)?.addValidators([Validators.required]);
    this.form.get("desdeDia")?.addValidators([Validators.required]);
    this.form.get("desdeHora")?.addValidators([Validators.required]);
    this.form.get("hastaDia")?.addValidators([Validators.required]);
    this.form.get("hastaHora")?.addValidators([Validators.required]);
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.form.valid){
      let turno = {
        nombre : this.form.value.nombre,
        especialidad : this.form.value.especialidad,
        desde : new Date(this.form.value.desdeDia + "T" + this.form.value.desdeHora),
        hasta : new Date(this.form.value.hastaDia + "T" + this.form.value.hastaHora)
      };
      this.service.add(turno).subscribe((resp)=>{
        Swal.fire("Bien", "El turno se ha registrado", "success");
        this.form.reset();
      })
    }else{
      Swal.fire("Error", "Corrija el formulario", "error");
    }
  }

}
