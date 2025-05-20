import { Component } from '@angular/core';
import { LibroModel } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-libros',
  imports: [CommonModule],
  templateUrl: './listado-libros.component.html',
  styleUrl: './listado-libros.component.css'
})
export class ListadoLibrosComponent {

  libros: LibroModel[] = [];

  constructor(private libroService: LibroService) {
    this.mostrarLibros();
  }

  mostrarLibros() {
    this.libros = [];
    this.libroService.getAll().subscribe((data: LibroModel[]) => {
      this.libros = data;
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: "Confirmar Borrado",
      text: "Desea eliminar este libro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        this.libroService.delete(id).subscribe(() => {
          this.mostrarLibros();
        });
      }
    });
  }
}
