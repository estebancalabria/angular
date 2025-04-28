import { GeneroModel } from "./genero.models";

export interface ContactoModel {
    id: number;
    documento : number;
    nombre: string;
    //apellido: string;
    //telefono: string;
    //email: string;
    fechaNacimiento: Date;
    genero: GeneroModel;
    //activo: boolean;
    //foto: string;
}