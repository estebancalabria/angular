import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CervezaService } from 'src/app/services/cerveza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cerveza',
  templateUrl: './form-cerveza.component.html',
  styleUrls: ['./form-cerveza.component.css']
})
export class FormCervezaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service : CervezaService,
    private formBuilder : FormBuilder) {
    
    /*this.form = new FormGroup({
      id: new FormControl(),
      marca: new FormControl(),
      tipo: new FormControl(),
      graduacion: new FormControl()
    });*/

    this.form = formBuilder.group({
      id: [0],
      marca: ['', Validators.required],
      tipo : ['', Validators.required],
      graduacion:['', Validators.required]
    })
  }

  modificarDatos(){
    this.form.get("marca")?.setValue("Marca Modificada desde El Codigo");
  }

  submitForm(){
    if (this.form.valid){
      this.service.add(this.form.value).subscribe(()=>{
        this.form.reset();
        Swal.fire("Exito","La Cerveza se ha registrado","success");
      });
    }
  }

  ngOnInit(): void {
  }

}
