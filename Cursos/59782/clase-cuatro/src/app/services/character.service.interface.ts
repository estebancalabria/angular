import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CharacterModel } from '../models/character.model';


@Injectable({
  providedIn: 'root'
})
export abstract class CharacterServiceInterface {

  abstract getAll():Observable<CharacterModel[]>;
}
