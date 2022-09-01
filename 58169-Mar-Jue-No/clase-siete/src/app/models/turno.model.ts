
export class TurnoModel{
    constructor(
        public id:number,
        public nombre:string,
        public especialidad:string,
        public desde:Date,
        public hasta:Date
    ){

    }
}