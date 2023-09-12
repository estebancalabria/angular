import { Personaje } from "./personaje.model";

export class ApiResult{
    constructor(
        public results: Personaje[]
    ){}
}