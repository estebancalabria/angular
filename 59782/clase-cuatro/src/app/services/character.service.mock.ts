import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CharacterModel } from '../models/character.model';
import { CharacterServiceInterface } from './character.service.interface';


@Injectable({
    providedIn: 'root'
})
export class CharacterServiceMock extends CharacterServiceInterface {

    //getAll():CharacterModel[]{
    getAll(): Observable<CharacterModel[]> {
        return new Observable<CharacterModel[]>((obs: Observer<CharacterModel[]>) => {
            obs.next([
                {
                    id: 1,
                    name: "Stan Smith",
                    image : "https://ih1.redbubble.net/image.986147108.2204/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
                    status: "alive",
                    species: "kid",
                    gender: "Male",
                    origin: { name: "South Park Colorado" }
                },
                {
                    id: 2,
                    name: "Buttlers",
                    image: "https://i.pinimg.com/originals/3a/f3/bf/3af3bf32a86b7ac5fe55f3d8cd1549f8.png",
                    status: "alive",
                    species: "kid",
                    gender: "Male",
                    origin: { name: "South Park Colorado" }
                },
                {
                    id: 3,
                    name: "Eric Cartman",
                    image: "https://pbs.twimg.com/profile_images/1324541475460362240/A--Mzlcg_400x400.jpg",                    status: "alive",
                    species: "kid",
                    gender: "Male",
                    origin: { name: "South Park Colorado" }
                },
            ]);   //return resp.result
        });
    }
}
