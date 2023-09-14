import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editor-producto',
  templateUrl: './editor-producto.component.html',
  styleUrls: ['./editor-producto.component.css']
})
export class EditorProductoComponent implements OnInit {

  producto? : Producto;

  constructor(private service: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router :Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
        this.service.get(+params.id).subscribe((result:Producto)=>{
          this.producto = result;
        })
    })
  }

  volver(){
     this.router.navigate(["producto"]);
  }
}
