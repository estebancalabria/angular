import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ProveedorModel from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  form : FormGroup;
  isNew:boolean = false;

  constructor(private service : ProveedorService,
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ) { 
      this.form = this.formBuilder.group<ProveedorModel>({
        id : 0,
        nombre:"",
        cuit:0,
        direccion:""
      });
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      let id = params.id;
      if (id){
        this.service.get(id).subscribe((resp)=>{
          this.form.patchValue(resp);  
        })
      } else{
        this.isNew = true;
      }
    })
  }

  submit(){
    if (this.isNew){
      this.service.add(this.form.value).subscribe(()=>{
        this.router.navigate([""]);
      })
    }else{
      this.service.update(this.form.value).subscribe(()=>{
        this.router.navigate([""]);
      })
    }
  }

}
