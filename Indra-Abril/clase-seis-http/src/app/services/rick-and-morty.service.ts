import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../models/api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacters():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>('https://rickandmortyapi.com/api/character');
  }
}
