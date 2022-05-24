export class CancionModel {
    //public id:number;

    constructor(
        public id:number,
        public nombre:string,
        public artista:string,
        public duracionSegundos:number,
        public fechaLanzamiento:Date){
        //this.id = id;
    }
}
