import { Injectable } from '@angular/core';
import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getPersonas() : PersonaModel[] {
    return [
      {
        "nombre": "Juan Pérez",
        "cargo": "Programador",
        "imagen": "https://thispersondoesnotexist.com?1",
        "description": "Apasionado por la programación y la tecnología.",
        "fechaDeNacimiento": new Date("1990-05-15")
      },
      {
        "nombre": "María García",
        "cargo": "Ux",
        "imagen": "https://thispersondoesnotexist.com?2",
        "description": "Creativa y detallista, amante del diseño y la estética.",
        "fechaDeNacimiento": new Date("1985-11-03")
      },
      {
        "nombre": "Luis Martínez",
        "cargo": "Gerente",
        "imagen": "https://thispersondoesnotexist.com/",
        "description": "Experto en análisis de datos financieros y planificación estratégica.",
        "fechaDeNacimiento": new Date("1978-08-22")
      },
      {
        "nombre": "Ana Rodríguez",
        "cargo": "Otro",
        "imagen": "https://thispersondoesnotexist.com/",
        "description": "Comprometida con la verdad y la objetividad en la información.",
        "fechaDeNacimiento": new Date("1995-02-10")
      },
      {
        "nombre": "Carlos Sánchez",
        "cargo": "Otro",
        "imagen": "https://thispersondoesnotexist.com/",
        "description": "Apasionado por la gastronomía y la creación de nuevos sabores.",
        "fechaDeNacimiento": new Date("1980-07-30")
      }
    ];
  }
}
