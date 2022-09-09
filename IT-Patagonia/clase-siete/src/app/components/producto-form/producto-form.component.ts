import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ProductoModel from 'src/app/models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  form : FormGroup;

  @Output()
  submit : EventEmitter<ProductoModel> = new EventEmitter();

  constructor( formBuilder : FormBuilder) { 
    /*this.form = new FormGroup({
      nombre : new FormControl(""),
      precio : new FormControl(null),
      fechaEmision : new FormControl(new Date())
    })*/
    this.form = formBuilder.group<ProductoModel>({
      id:0,
      nombre : "", 
      precio:0,
      fechaEmision:new Date()
    });
    this.form.get("nombre")?.addValidators(Validators.required);
    this.form.get("precio")?.addValidators([Validators.required, Validators.min(100)]);
    this.form.get("fechaEmision")?.addValidators([Validators.required]);

  }

  ngOnInit(): void {
  }

  show(producto:ProductoModel){
    this.form.patchValue(producto);
  }

  formSubmit(){
    if (this.form.valid){
      this.submit.emit(this.form.value);
    }else{
      Swal.fire("Error","Corrija los errores antes", "error");
    }
  }
}
