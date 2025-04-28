import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductoModel from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-add',
  template:` <app-producto-form (submit)='add($event)'></app-producto-form>`,
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  constructor(private service:ProductoService,
    private router:Router) { }

  ngOnInit(): void {
  }

  add(producto:ProductoModel){
    this.service.add(producto).subscribe(()=>{
      this.router.navigate([""]);
    })
  }

}
