import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListadoServiciosService } from '../../services/listado-servicios.service';

@Component({
  selector: 'app-detalle-servicio',
  imports: [],
  templateUrl: './detalle-servicio.component.html',
  styleUrl: './detalle-servicio.component.css'
})
export class DetalleServicioComponent {

  id = 0;
  private router: Router;
  nombre = '';
  descripcion = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    /* private */router: Router,
   private servicio: ListadoServiciosService) {

    // Obtenemos el id del servicio desde la URL
    this.id = parseInt(activatedRoute.snapshot.paramMap.get('id')!);
    // Obtenemos el servicio correspondiente al id
    //this.servicio = this.servicios.find(servicio => servicio.id === this.id);
    this.router = router;   //Hacemos esto o le ponemos private al parametro

    let svr = this.servicio.getById(this.id);
    this.nombre = svr.nombre;
    this.descripcion = svr.descripcion;

  }

  volver(){
    // Volver a la lista de servicios
    //Esto refrescaria la pagina, pero no es necesario
    this.router.navigate(['/servicios']);
    //window.history.back();
  }

}
