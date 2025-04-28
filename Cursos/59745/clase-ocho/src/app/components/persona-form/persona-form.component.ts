import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PersonaModel } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  public model : PersonaModel = new PersonaModel(0,"","");

  constructor(private location:Location,
    private service:PersonaService) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  doSumit(){
    this.service.add(this.model).subscribe(()=>{
      this.location.back();
    })  
  }

}
