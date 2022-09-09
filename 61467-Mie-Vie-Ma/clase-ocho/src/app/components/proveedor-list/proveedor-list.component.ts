import { Component, OnInit } from '@angular/core';
import ProveedorModel from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  proveedores: ProveedorModel[] = [];

  constructor(private service: ProveedorService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp) => {
      this.proveedores = resp;
    })
  }

  eliminar(id: number) {
    Swal.fire({
      title: "Confirmacion",
      text: "Seguro desea eliminar?",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true
    }).then((resp) => {
      if (resp.isConfirmed) {
           this.service.delete(id).subscribe(()=>{
            this.service.getAll().subscribe(resp=>{
              this.proveedores = resp;
            })
           })
      }
    })

  }
}
