import { Component, OnInit } from '@angular/core';
import ProductoModel from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos : ProductoModel[] = [];

  constructor(private service : ProductoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp: ProductoModel[])=>{
      this.productos = resp;
    })
  }

  borrar(id:number){
    Swal.fire({
      title:"Confirmacion",
      text:"Esta seguro que dese eliminar?",
      icon:"warning",
      showCancelButton:true,
      showConfirmButton:true
    }).then((resp)=>{
      if (resp.isConfirmed){
        this.service.delete(id).subscribe(()=>{
          this.service.getAll().subscribe((resp: ProductoModel[])=>{
            this.productos = resp;
          })
        })
      }
    })
  }

}
