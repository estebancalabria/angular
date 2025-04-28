import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import LibroModel from 'src/app/models/libro.model';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {

 libro? : LibroModel;
 form:FormGroup;

  constructor(
    private libroService : LibroService,
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private formBuilder : FormBuilder
  ) { 
    this.form = formBuilder.group({
      nombre : [],
      autor : [],
      genero : []
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params:any)=>{
      let id = params.id;
      this.libroService.get(id).subscribe( (resp:LibroModel)=>{
        this.libro = resp;
        this.form.patchValue(this.libro);
      })
    });
  }

  editar(){
      this.libro = {...this.libro, ...this.form.value}; //Lo hago asi para quedarme con el id
      this.libroService.update(this.libro!).subscribe(()=>{
      this.router.navigate([""]);
    });

  }

  cancelar(){
    this.router.navigate([""]);
  }

}
