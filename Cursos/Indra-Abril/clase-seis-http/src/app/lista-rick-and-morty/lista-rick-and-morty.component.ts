import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiResponseModel } from '../models/api-response.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-lista-rick-and-morty',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCardModule, MatGridListModule,MatListModule ],
  templateUrl: './lista-rick-and-morty.component.html',
  styleUrl: './lista-rick-and-morty.component.css'
})
export class ListaRickAndMortyComponent {

  respuesta? : ApiResponseModel;

  constructor(private service: RickAndMortyService){

  }

  ngOnInit(){
    this.service.getCharacters().subscribe((respuesta:ApiResponseModel) => {
         this.respuesta = respuesta;
      });
  }
}
  //Inyectamos el servicio HttpClient
  /*constructor(private http: HttpClient){  

  }

  //Usa libreria rxjs para hacer peticiones http
  ngOnInit(){
    this.http.get<ApiResponseModel>('https://rickandmortyapi.com/api/character')
      .subscribe((respuesta:ApiResponseModel) => {
         this.respuesta = respuesta;
      });
  }*
  
  

}*/
