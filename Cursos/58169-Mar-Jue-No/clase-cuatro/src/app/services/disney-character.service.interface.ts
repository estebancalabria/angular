import { Observable } from "rxjs";
import { DisneyCharacterModel } from "../models/disney-character.model";

export abstract class DisneyCharacterServiceInterface{
    abstract getAll():Observable<DisneyCharacterModel[]>;
}