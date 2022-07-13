import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit {

  form : FormGroup;

  constructor(
    private service:PeliculaService,
    private formsBuilder : FormBuilder,
    private router:Router) { 
      this.form =formsBuilder.group({
        nombre: [''],
        protagonista: ['']
      })
    }

  ngOnInit(): void {
  }

  submitForm(){
    this.service.add(this.form.value).subscribe(()=>{
      this.router.navigate([""]);
    })
  }

}
