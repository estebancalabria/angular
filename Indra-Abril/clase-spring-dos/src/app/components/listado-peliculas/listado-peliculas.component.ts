import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { PeliculaModel } from '../../models/pelicula.model';
import { MatTableModule } from "@angular/material/table"
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import { NgFor } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, NgFor],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  peliculas: PeliculaModel[] = [];

  constructor(private service: PeliculaService,
    private router: Router) {

  }

  recuperarPeliculas() {
    this.service.getPeliculas()
    .subscribe((data: PeliculaModel[]) => {
      this.peliculas = data;
    });
  }

  ngOnInit() {
    this.recuperarPeliculas();
  }

  agregarPelicula() {
    this.router.navigate(["agregar"]);
  }
  
  deletePelicula(id: number) {

    Swal.fire({
      title: "Esta Seguro?",
      text: "La pelicula se eliminara permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.borrarPelicula(id)
        .subscribe({
          next: (data: number) => {  
            Swal.fire({
              title: "Eliminada!",
              text: "La pelicula ha sido eliminada.",
              icon: "success"
            });

            this.recuperarPeliculas();           
          },

          error: (res: HttpErrorResponse) => { 
            Swal.fire({
              title: "Error!",
              text: (res.status== 404) ? "Elemento no encontrado" : JSON.stringify(res.error),
              icon: "error"
            });
            
           }
        });
      }
    });

  }
}
