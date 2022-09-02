import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/modelo/libro.model';
import { LibroServiceInterface } from 'src/app/services/libro.service.interface';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  libros : LibroModel[] = [];

  constructor(private service : LibroServiceInterface) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp:LibroModel[])=>{
      this.libros = resp
    });
  }

}
