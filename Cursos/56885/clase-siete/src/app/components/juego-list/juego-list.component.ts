import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoModel } from 'src/app/models/juego.model';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego-list',
  templateUrl: './juego-list.component.html',
  styleUrls: ['./juego-list.component.css']
})
export class JuegoListComponent implements OnInit {

  juegos : JuegoModel[] = [];

  constructor(private service : JuegoService, 
    private router:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:JuegoModel[])=>{
      this.juegos = data;
    })
  }

  onEditar(id:number){
    this.router.navigate(['juego', id])
  }

}
