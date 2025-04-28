import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { PeliculaModel } from '../../models/pelicula.model';
import { MatTableModule } from "@angular/material/table"
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [
    MatTableModule, 
    MatButtonModule, 
    MatIconModule, 
    MatProgressSpinnerModule, 
    CommonModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  peliculas: PeliculaModel[] = [];
  loading: boolean = true;
  errorMessage: string = "";

  constructor(private service: PeliculaService,
    private router: Router) {

  }

  numberAsRange(n:number){
    return new Array(n);
  }

  recuperarPeliculas() {

    this.loading = true;

    setTimeout(() => {
      this.service.getPeliculas()
        .subscribe({
          next: (data: PeliculaModel[]) => {
            this.peliculas = data;
            this.loading = false;
            this.errorMessage = "";
          },
          error: (res: HttpErrorResponse) => {
            this.errorMessage = (res.status == 0) ? "No se ha posido acceder al Server" : JSON.stringify(res);
          }
        }
        );
    }, 1500);
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
                text: (res.status == 404) ? "Elemento no encontrado" : JSON.stringify(res.error),
                icon: "error"
              });

            }
          });
      }
    });

  }
}
