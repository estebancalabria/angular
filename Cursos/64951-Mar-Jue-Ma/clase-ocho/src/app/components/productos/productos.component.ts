import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos : Producto[] = [];

  constructor(private service:ProductoService){

  }

  ngOnInit(): void {
      this.service.getAll().subscribe((result : Producto[])=>{
          this.productos = result;
      })
  }
}
