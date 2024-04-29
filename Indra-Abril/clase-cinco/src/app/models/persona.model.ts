export class PersonaModel {
    constructor(public nombre: string, 
        public cargo: "Programador" | "QA" | "PM" | "Gerente" | "Analista" | "Ux" | "Otro", 
        public imagen : string,
        public description: string, 
        public fechaDeNacimiento: Date) {

    }

    //Ahora tiene sentido tener un clase en vez de una interfaz
    //porque le agregamos un metodo que hace algo
    copiarDesde?(otra: any) {
        this.nombre = otra.nombre;
        this.cargo = otra.cargo;
        this.imagen = otra.imagen;
        this.description = otra.description;
        this.fechaDeNacimiento = otra.fechaDeNacimiento;  
    }
}

