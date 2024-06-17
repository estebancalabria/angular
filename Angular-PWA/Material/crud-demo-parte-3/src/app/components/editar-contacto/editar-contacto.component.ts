import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-contacto',
  standalone: true,
  imports: [],
  templateUrl: './editar-contacto.component.html',
  styleUrl: './editar-contacto.component.css'
})
export class EditarContactoComponent {

  contactoId: number = 0; // Declara una variable para almacenar el id del contacto

  constructor(private activatedRoute: ActivatedRoute) {
    // Accede al parámetro 'id' de la URL usando el servicio ActivatedRoute
    this.activatedRoute.params.subscribe(
      {
        next: (params: any) => {
          this.contactoId = params['id']; // Almacena el id del contacto en la variable
        }
      }
    );
  }
}
