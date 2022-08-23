import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DisneyCharacterModel } from '../models/disney-character.model';
import { DisneyCharacterServiceInterface } from './disney-character.service.interface';


const URL = "https://api.disneyapi.dev/characters";

interface CaractersResp{
   data : DisneyCharacterModel[];
}

@Injectable({
  providedIn: 'root'
})
export class DisneyCharacterService extends DisneyCharacterServiceInterface {

  constructor(private http:HttpClient) { 
    super();
  }

  getAll():Observable<DisneyCharacterModel[]>{
    return new Observable( (obs : Observer<DisneyCharacterModel[]>)=>{
      this.http.get<CaractersResp>(URL).subscribe((resp:CaractersResp)=>{
        //el proposito del next es invocar la funcion que me registran en el subscribe
        obs.next(resp.data);
      })
    })
  }
}
