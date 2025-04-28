import { OriginModel } from "./origin.model";

export class CharacterModel {
    constructor(
        public id : number,
        public name : string,
        public status : string,
        public species : string,
        public gender: string,
        public image : string,
        public origin : OriginModel
    ){}
}