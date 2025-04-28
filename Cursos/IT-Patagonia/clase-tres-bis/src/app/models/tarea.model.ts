
export enum Prioridad{
    Alta = "Alta",
    Media = "Media",
    Baja = "Baja"
}

export class TareaModel {

    private static ultimo_id=1;
    readonly id: number;
    //titulo: string;
    ///prioridad: string;
    //done: boolean;

    constructor(
        public titulo: string,
        public prioridad: Prioridad,
        public done: boolean) {

        //this.id = id;
        //this.titulo = titulo;
        //this.prioridad = prioridad;
        //this.done = done;   
        this.id = TareaModel.ultimo_id;
        TareaModel.ultimo_id++;
    }
}