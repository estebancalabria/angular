import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonModel } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})
export abstract class PokemonServiceInterface {
    public abstract getAll():Observable<PokemonModel[]>;
}