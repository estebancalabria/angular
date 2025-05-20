import { Component } from '@angular/core';
import { LibroInterfaceService } from '../../services/libro-interface.service';
import { LibroModel } from '../../models/libro.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-libros',
  imports: [CommonModule],
  templateUrl: './listado-libros.component.html',
  styleUrl: './listado-libros.component.css'
})
export class ListadoLibrosComponent {

  libros: LibroModel[] = [];

  constructor(
    private libroService: LibroInterfaceService
  ) {
    this.libroService.getLibros().subscribe((data: LibroModel[]) => {
      this.libros = data;
    });
  }

}
