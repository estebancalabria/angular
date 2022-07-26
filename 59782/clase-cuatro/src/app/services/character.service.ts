import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CharacterModel } from '../models/character.model';
import { CharacterServiceInterface } from './character.service.interface';

const URL = "https://rickandmortyapi.com/api/character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends CharacterServiceInterface {

  constructor(private http:HttpClient) { 
    super();
  }

  //getAll():CharacterModel[]{
  getAll():Observable<CharacterModel[]>{
    return new Observable<CharacterModel[]>( (obs:Observer<CharacterModel[]>)=>{
      this.http.get(URL).subscribe((resp:any)=>{
        obs.next(resp.results);   //return resp.result
      })       
    });
  }
}
