import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDummyService {

  public getAll():Observable<PokemonModel[]>{
    return new Observable((obs:Observer<PokemonModel[]>)=>{

      setTimeout(()=>{
        obs.next([
          new PokemonModel(1,"Angloron","https://picsum.photos/80?1","Typescript",20),
          new PokemonModel(2,"Achemon","https://picsum.photos/80?2","IA",30),
          new PokemonModel(3,"JhamesMon","https://picsum.photos/80?3","CodeBreaker",40),
          new PokemonModel(4,"Lorum","https://picsum.photos/80?4","Photography",60),
        ]);
        obs.complete();
      },1000)

      
    })
  }
}
