

export interface PeliculaModel {
    id: number;
    titulo: string;
    director: string;
    fechaEstreno: Date;
    duracion: number;
    genero: string;
    sinopsis: string;
    imagen: string;
    precio: number;
    rating: number;
}

//Lo puedo hacer tambien como clase
/*export class PeliculaModel {
    constructor(
        public id: number,
        public titulo: string,
        public director: string,
        public fechaEstreno: Date,
        public duracion: number,
        public genero: string,
        public sinopsis: string,
        public imagen: string,
        public precio: number,
        public rating: number
    ) { }
}*/