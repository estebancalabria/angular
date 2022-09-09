import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductoModel from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoFormComponent } from '../producto-form/producto-form.component';

@Component({
  selector: 'app-producto-edit',
  template:` <app-producto-form (submit)='edit($event)'></app-producto-form>`,
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  @ViewChild(ProductoFormComponent)
  form! : ProductoFormComponent;

  constructor(private service:ProductoService,
    private activatedRoute : ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      let id = params.id;
      this.service.get(id).subscribe((prod:ProductoModel)=>{
        this.form.show(prod);
      })
    })
  }

  edit(producto:ProductoModel){
    this.service.edit(producto).subscribe(()=>{
      this.router.navigate([""]);
    })
  }

}
