import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { PeliculaModel } from '../../models/pelicula.model';
import { MatTableModule} from "@angular/material/table"

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  peliculas:PeliculaModel[] = [];

  constructor(private service : PeliculaService) {

  }

  ngOnInit(){
    this.service.getPeliculas()
    .subscribe((data:PeliculaModel[])=>{
      this.peliculas = data;
    });
  }
}
