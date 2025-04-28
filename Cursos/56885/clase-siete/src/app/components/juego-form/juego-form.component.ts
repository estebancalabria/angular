import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { JuegoModel } from 'src/app/models/juego.model';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego-form',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.css']
})
export class JuegoFormComponent implements OnInit {

  juego?:JuegoModel;
  form : FormGroup;

  constructor(private service:JuegoService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private formBuilder : FormBuilder) { 

      this.form = formBuilder.group({
        nombre : [''],
        genero : ['']
      })
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params["id"];
      this.service.getById(id).subscribe( (data:JuegoModel) =>{
        this.juego = data;
        this.form.patchValue(data);
      })
    })
  }

}
