import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeModel } from '../../models/personaje.model';
import { CommonModule } from '@angular/common';
import { MisValidadores } from '../../shared/MisValidadores';
import { PersonajeService } from '../../services/personaje.service';
import { getObjectProps, PropNames } from '../../shared/StrongTypeProps';

@Component({
  selector: 'app-personaje-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personaje-form.component.html',
  styleUrl: './personaje-form.component.css'
})
export class PersonajeFormComponent {
   // modelo : PersonajeModel ;
    formulario: FormGroup; // Aquí se define el formulario reactivo, pero no se inicializa en este ejemplo.
    Campos : PropNames<PersonajeModel>;

    constructor(
      private formBuilder: FormBuilder,
      private service: PersonajeService // Inyecta el servicio de personaje para manejar la lógica de negocio.
    ) {
        /*this.modelo = {
            id: 0,
            nombre: 'Goku',
            fechaDeNacimiento: new Date('1989-05-09'),
            pais: 'Japón',
            biografia: 'Goku es un guerrero saiyajin que lucha por la paz y la justicia. Es conocido por su gran fuerza y habilidades de combate.',
            //edad : 34 //Este campo me tira error porque no existe en el modelo
        }*/

        /*this.formulario = new FormGroup({
            // Aquí se inicializan los controles del formulario reactivo.
            id: new FormControl(0),
            nombre: new FormControl('Goku'),
            fechaDeNacimiento: new FormControl(new Date('1989-05-09').toISOString().substring(0, 10)), // Formato YYYY-MM-DD
            pais: new FormControl('Japón'),
            biografia: new FormControl('Goku es un guerrero saiyajin que lucha por la paz y la justicia. Es conocido por su gran fuerza y habilidades de combate.'),
        }); // Inicializa el formulario reactivo aquí.*/

        this.formulario = this.formBuilder.group({
            id: [0],
            nombre: ['Goku', [
                  Validators.required, 
                  Validators.minLength(3), 
                  Validators.maxLength(20),
                  Validators.pattern('^[A-Z][a-z]+$'),
                  //(control: AbstractControl) => ( (control.value == "Pedro") ? {noPedro : true} : null ) //Custom validator 
                  MisValidadores.noPedro //Custom validator  o sino MisValidadores.noPedroFn()
                  
                ]], // Solo letras y espacios  
            fechaDeNacimiento: [new Date('1989-05-09').toISOString().substring(0, 10)], // Formato YYYY-MM-DD
            pais: ['Japón'],
            biografia: ['Goku es un guerrero saiyajin que lucha por la paz y la justicia. Es conocido por su gran fuerza y habilidades de combate.'],
        });

        this.Campos = getObjectProps(this.formulario.value)

        //La forma que suelo hacerlo yo
        /*this.formulario = this.formBuilder.group<PersonajeModel>({
            id: 0,
            nombre: 'Goku', // Solo letras y espacios  
            fechaDeNacimiento: new Date('1989-05-09'), // Formato YYYY-MM-DD
            pais: 'Japón',
            biografia: 'Goku es un guerrero saiyajin que lucha por la paz y la justicia. Es conocido por su gran fuerza y habilidades de combate.',
            //nuevo : "edds" //Me da error porque no existe en el modelo
        })
        this.formulario.get('nombre')?.addValidators([Validators.required, Validators.minLength(3), Validators.maxLength(20)]); // Agrega validaciones al campo nombre.*/
    }

    sugerirNombre() {
        let nombres = ['Goku', 'Vegeta', 'Piccolo', 'Gohan', 'Krillin', 'Bulma', 'Trunks', 'Frieza', 'Cell'];
        let randomIndex = Math.floor(Math.random() * nombres.length);
        this.formulario.get('nombre')?.setValue(nombres[randomIndex]);
    }

    submit() {
       if (this.formulario.valid) {
            let personaje: PersonajeModel = this.formulario.value; // Obtiene el valor del formulario y lo asigna a la variable personaje.
            this.service.agregarPersonaje(personaje); // Llama al servicio para agregar el personaje.
        }
    }
}
