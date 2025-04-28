import { Component, OnInit } from '@angular/core';
import { ServicioModel } from 'src/app/models/servicio.model';
import { ServicioService } from 'src/app/services/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios: ServicioModel[] = [];

  constructor(private serivice: ServicioService) { }

  ngOnInit(): void {
    this.serivice.getAll().subscribe({
      next: (resp: ServicioModel[]) => { this.servicios = [...resp, ...resp, ...resp, ...resp]; },
      error: (err) => { Swal.fire("Error", "Error conectandose al servidor", "error") }
    });
  }

}
