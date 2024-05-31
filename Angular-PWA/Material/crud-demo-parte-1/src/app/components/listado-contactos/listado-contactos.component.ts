import { Component } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { ContactoModel } from '../../models/contacto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-contactos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-contactos.component.html',
  styleUrl: './listado-contactos.component.css'
})
export class ListadoContactosComponent {

  contactos: ContactoModel[] = [];

  constructor(private service: ContactoService) {}

  ngOnInit(): void {
    this.service.obtenerContactos().subscribe(contactos => {
      this.contactos = contactos;
    });
  }
}
