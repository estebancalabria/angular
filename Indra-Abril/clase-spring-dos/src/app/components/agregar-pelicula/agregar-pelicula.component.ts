import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PropNames, getObjectProps } from '../../utils/strong-typed-props';
import { PeliculaModel } from '../../models/pelicula.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PeliculaService } from '../../services/pelicula.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar/*, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel,MatSnackBarRef*/ } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-agregar-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatCardModule],
    
  templateUrl: './agregar-pelicula.component.html',
  styleUrl: './agregar-pelicula.component.css'
})
export class AgregarPeliculaComponent {

  form: FormGroup;
  campos: PropNames<PeliculaModel>;
  errores: string[] = [];

  constructor(private fb: FormBuilder,
    private service: PeliculaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {

    this.form = this.fb.group({
      nombre: "",
      genero: "",
      fechaLanzamiento: "",
      puntuacion: 0
    });
    this.campos = getObjectProps(this.form.value);
  }

  agregarPelicula() {
    this.service.addPelicula(this.form.value)
      .subscribe({
        next: (data: PeliculaModel) => { this.router.navigate([""]) },
        error: (res: HttpErrorResponse) => {
          //alert(res.status + " " + res.error.message) 
          this.errores = res.error.errors.map((e: any) => e.defaultMessage);
          this.snackBar.open("Error al agregar la pelicula", "Cerrar");

          //console.log(res);
          //alert(JSON.stringify(res));
        }
      });
  }

  cancelar() {
    this.router.navigate([""]);
  }



}
