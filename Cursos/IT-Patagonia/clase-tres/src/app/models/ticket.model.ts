
export class TicketModel{
    //fecha:Date;
    //titulo:string;
    id : number = 0;
    static ultimo_id : number = 0;

    constructor(
        public fecha:Date,
        public titulo:string){
        //this.fecha = fecha;
        //this.titulo=titulo;
        TicketModel.ultimo_id++;
        this.id = TicketModel.ultimo_id;
    }
}