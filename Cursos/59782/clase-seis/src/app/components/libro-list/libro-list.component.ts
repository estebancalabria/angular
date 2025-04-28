import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import LibroModel from 'src/app/models/libro.model';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  libros : LibroModel[] = [];

  constructor(
    private libroService : LibroService,
    private route : Router,
  ) { }

  ngOnInit(): void {
    this.libroService.getAll().subscribe((resp:LibroModel[])=>{
      this.libros = resp;
    });
    //TODO: Tratamiento de errores
  }

  editarLibro(id:number){
    this.route.navigate(["libro/editar/"+ id]);
  }

}
