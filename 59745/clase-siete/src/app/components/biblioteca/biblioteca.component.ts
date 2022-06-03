import { Component, OnInit } from '@angular/core';
import { JuegoModel } from 'src/app/models/juego.model';
import { BibliotecaService } from 'src/app/services/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  public juegos:JuegoModel[] = [];

  constructor(private service:BibliotecaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:JuegoModel[])=>{
      this.juegos = data;
    })
  }

}
