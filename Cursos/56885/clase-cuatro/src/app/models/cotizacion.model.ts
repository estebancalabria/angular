
export class Cotizacion{
    constructor(
        public id:number,
        public moneda:string,
        public fecha:Date,
        public simbolo:string,
        public cotizacion:number
    ){}
}