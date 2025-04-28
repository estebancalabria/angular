export interface Tarea {
    id : number;
    nombre:string;
    autor:string;
    done:boolean;
    relacionadas? : Tarea[];
}
