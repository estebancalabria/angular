import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getObjectProps, PropNames, typeProps } from '../../shared/types/prop-names';
import { LibroModel } from '../../models/libro.model';

@Component({
  selector: 'app-agregar-libro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {

  formulario : FormGroup;
  campos: PropNames<LibroModel>

  constructor(
    private formBuilder: FormBuilder,
    private libroService: LibroService,
    private router: Router
  ){
      this.formulario = this.formBuilder.group({
            title: ['', [Validators.required,Validators.minLength(5)]],
            author:  ['', [Validators.required, Validators.minLength(8)]]
          })

      this.campos = getObjectProps(this.formulario.value);
  }

  agregar(){
    if(this.formulario.valid){
      this.libroService.add(this.formulario.value).subscribe({
        next: (data) => {
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }else{
      alert("Formulario inválido");
    }
  }

  volver(){
    this.router.navigate(['']);
  }

  getErrors(controlName:string): string[] {
    const errores: string[] = [];
    const control = this.formulario.get(controlName);
    if (control && control.errors && control.dirty) {
      
      if (control.errors['required']) {
        errores.push('Este campo es obligatorio');
      }
      
      if (control.errors['minlength']) {
        errores.push(`El mínimo de caracteres es ${control.errors['minlength'].requiredLength}. Actual tiene ${control.errors['minlength'].actualLength}`);
      }      
    }    
    return errores;
  }
}

