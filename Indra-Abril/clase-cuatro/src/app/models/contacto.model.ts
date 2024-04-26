
export interface ContactoModel {
    nombre : string;
    correo : string;
    fechaDeNacimiento : Date;
    cantidadHijos : number;
    //Definir un tipo de dato como los valores posibles que peude tener
    genero : "masculino" | "femenino" | "otros" ;
}