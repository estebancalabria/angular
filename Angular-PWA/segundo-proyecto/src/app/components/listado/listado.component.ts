import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoModel } from '../../models/contacto.model';
import { CommonModule } from '@angular/common';
import { ContactoServiceInterface } from '../../services/contacto.service.interface';

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

  //Se ejecuta cuando el componente ya se mostro
  ngOnInit(){
    this.service.getContactos().subscribe({
      next : (lista : ContactoModel[]) =>{
        this.contactos = lista;
      }
    })
  }
}
