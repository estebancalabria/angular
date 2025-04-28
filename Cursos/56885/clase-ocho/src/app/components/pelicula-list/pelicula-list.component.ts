import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas : PeliculaModel[] = [];

  constructor(public service : PeliculaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:PeliculaModel[])=>{
      this.peliculas = data;
    })
  }

  eliminar(id:number){
    this.service.delete(id).subscribe(()=>{
      this.service.getAll().subscribe((data:PeliculaModel[])=>{
        this.peliculas = data;
      });      
    })
  }

}
