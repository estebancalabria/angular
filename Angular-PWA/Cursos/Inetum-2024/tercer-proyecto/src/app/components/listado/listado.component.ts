import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoModel } from '../../models/contacto.model';
import { CommonModule } from '@angular/common';
import { ContactoServiceInterface } from '../../services/contacto.service.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  contactos: ContactoModel[] = [];

  constructor(private service: ContactoServiceInterface) {

  }

  recuperarContactosDelBackend(){
    this.service.getContactos().subscribe({
      next : (lista : ContactoModel[]) =>{
        this.contactos = lista;
      }
    })
  }

  //Se ejecuta cuando el componente ya se mostro
  ngOnInit(){
    this.recuperarContactosDelBackend();
  }

  eliminar(id:number){

    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está a punto de eliminar un contacto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(id).subscribe({
          next : () => {
            this.recuperarContactosDelBackend()
          }
        })
      }
    
    })
  }
}
