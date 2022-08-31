import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DogModel } from 'src/app/models/dog.model';

const URL = "https://api.thedogapi.com/v1/images/search";

@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.css']
})
export class AdopcionesComponent implements OnInit {
  
  perritos = [
    {nombre : "Firulais", imagen : this.http.get<DogModel[]>(URL)},
    {nombre : "Rintintin", imagen : this.http.get<DogModel[]>(URL)},
    {nombre : "Pluto", imagen : this.http.get<DogModel[]>(URL)},
    {nombre : "Lazie", imagen : this.http.get<DogModel[]>(URL)}
  ]

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
  }

}
