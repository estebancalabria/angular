
export class IncripcionModel{

    fecha : Date = new Date();

    constructor(
        public nombre:string,
        public correo:string,
        public telefono:number
    ){

    }
}