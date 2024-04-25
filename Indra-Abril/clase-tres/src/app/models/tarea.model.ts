import { EstadoTareaModel } from "./estado-tarea.model";

export class TareaModel {

    //En typescript esto no se hace mucho
    // solo si quieo alguna funcionalidad en el getter y en el setter
    /*private _nombre: string;

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    constructor (nombre: string) {
        this._nombre = nombre;
    }*/

    //Si al parametro del constructor le pongo public ya me crea:
    // propiedad, getter, setter y this.propiedad=propiedad
    // esto es azucar sintactica o syntactic sugar
    constructor(public nombre: string, 
        public estado: EstadoTareaModel = EstadoTareaModel.Pendiente) {
    }


}
