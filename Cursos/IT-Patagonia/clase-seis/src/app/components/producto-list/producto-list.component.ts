import { Component, OnInit } from '@angular/core';
import ProductoModel from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos : ProductoModel[] = [];

  constructor(private service : ProductoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((resp: ProductoModel[])=>{
      this.productos = resp;
    })
  }

}
