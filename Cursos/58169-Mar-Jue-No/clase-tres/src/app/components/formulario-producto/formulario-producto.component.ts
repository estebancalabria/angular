import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from 'src/app/models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  modelo : ProductoModel = new ProductoModel(1,
    12345,
    "Notebook Asus Zephyrus",
    new Date());

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form : NgForm){
    if (form.valid){
      alert(JSON.stringify(this.modelo));
    }else{
      Swal.fire("Corrija los campos del formulario");
    }
  }
}
