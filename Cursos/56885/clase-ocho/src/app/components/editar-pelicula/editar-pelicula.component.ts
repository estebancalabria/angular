import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaModel } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  form : FormGroup;

  constructor(
    private service:PeliculaService,
    private formsBuilder : FormBuilder,
    private router:Router,
    private activatedRoute: ActivatedRoute) { 
      this.form =formsBuilder.group({
        id:[0],
        nombre: [''],
        protagonista: ['']
      })
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (param:any)=>{
       let id = param.id;
       this.service.get(id).subscribe( (data:PeliculaModel)=>{
          this.form.patchValue(data);
       })
    })
  }

  submitForm(){
    this.service.update(this.form.value).subscribe(()=>{
      this.router.navigate([""]);
    })
  }

}
