import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoServiciosService {

  private servicios: any[] = [
      {id:1, nombre : "Desarrollo Web", descripcion : "Desarrollo de aplicaciones web a medida utilizando las últimas tecnologías."},
      {id:2, nombre : "Desarrollo Movil", descripcion : "Desarrollo de aplicaciones móviles para iOS y Android."},
      {id:3, nombre : "Consultoria", descripcion : "Asesoramiento en la implementación de soluciones tecnológicas."},
      {id:4, nombre : "Soporte Tecnico", descripcion : "Soporte técnico para resolver problemas de hardware y software."},
      {id:5, nombre : "Capacitacion", descripcion : "Capacitación en el uso de herramientas tecnológicas."},
      {id:6, nombre : "Mantenimiento", descripcion : "Mantenimiento preventivo y correctivo de equipos informáticos."},
    ];

  constructor() { }

  get() {
    return this.servicios;
  }

  getById(id: number) {
    return this.servicios.find(servicio => servicio.id === id);
  }
}
