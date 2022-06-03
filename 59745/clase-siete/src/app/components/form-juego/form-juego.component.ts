import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JuegoModel } from 'src/app/models/juego.model';
import { BibliotecaService } from 'src/app/services/biblioteca.service';

@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {

  public juego?:JuegoModel;
  public form:FormGroup;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private service:BibliotecaService,
    private builder:FormBuilder) { 
      this.form = builder.group({
         id : [0],
         nombre : ['', Validators.required],
         genero : [''],
         year : [2000],
         imagen : ['']
      })
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params)=>{
      let id = params["id"];
      this.service.get(id).subscribe( (juego:JuegoModel)=>{
        this.juego = juego;
        this.form.patchValue(this.juego);
      });
    })
  }

  submit(){
    this.service.update(this.form.value).subscribe(()=>{
      alert("Grabo");
    })
  }

}
