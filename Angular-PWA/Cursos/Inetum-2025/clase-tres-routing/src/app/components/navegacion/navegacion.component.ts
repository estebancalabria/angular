import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from "../../app.routes";

@Component({
  selector: 'app-navegacion',
  imports: [RouterLink, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  // Definimos un array de objetos para las opciones de navegación
 /* opciones: { nombre: string, ruta: string }[] = [
    { nombre: 'Inicio', ruta: '' },
    { nombre: 'Catalogo', ruta: 'catalogo' },
    { nombre: 'Servicios', ruta: 'servicios' },
    { nombre: 'Contacto', ruta: 'contacto' }
  ];*/

  opciones = routes.map(route => ( {
    nombre: route.path!.charAt(0).toUpperCase() + route.path!.slice(1),
    ruta: route.path 
  }));

}