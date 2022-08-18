
export class ProductoModel{
    
    //id : number;
    constructor(
        public id : number, //es lo mismo que crear el atributo y asignarlo
        public codigo:number,
        public nombre:string,
        public fecha:Date
    ){
        //this.id = id;
    }
}