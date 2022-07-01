import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonServiceInterface } from './pokemon-interface.service';

const BASE_URI = "https://pokeapi.co/api/v2/pokemon/";

@Injectable({
    providedIn: 'root'
})
export class PokemonService extends PokemonServiceInterface {



    constructor(private http: HttpClient) {
        super()
    }

    public getAll(): Observable<PokemonModel[]> {
        return new Observable((obs: Observer<PokemonModel[]>) => {
            this.http.get<any>(BASE_URI).subscribe( (data:any)=>{

                let results :PokemonModel[]  = [];

                data.results.forEach((poke:any) => {
                    this.http.get(poke.url).subscribe((pokemon:any)=>{
                        results.push(new PokemonModel(1, pokemon.name, "","sdsds", 23));
                    })
                });

                console.log(results);

                obs.next(results);
            })
            
            
        })
    }
}
