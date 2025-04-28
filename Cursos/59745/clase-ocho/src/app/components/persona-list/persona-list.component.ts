import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaModel } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas : PersonaModel[] = [];

  constructor(private service : PersonaService,
    private router:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe( (list) =>{
      this.personas = list;
    })
  }

  navigateToAdd(){
    this.router.navigate(["Add"]);
  }

}
