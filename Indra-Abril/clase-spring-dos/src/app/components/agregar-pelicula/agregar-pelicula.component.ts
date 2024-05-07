import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PropNames, getObjectProps } from '../../utils/strong-typed-props';
import { PeliculaModel } from '../../models/pelicula.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { PeliculaService } from '../../services/pelicula.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './agregar-pelicula.component.html',
  styleUrl: './agregar-pelicula.component.css'
})
export class AgregarPeliculaComponent {

  form: FormGroup;
  campos: PropNames<PeliculaModel>;

  constructor(private fb: FormBuilder,
    private service: PeliculaService,
    private router: Router
  ) {

    this.form = this.fb.group({
      nombre: "",
      genero: ""
    });
    this.campos = getObjectProps(this.form.value);
  }

  agregarPelicula() {
    this.service.addPelicula(this.form.value)
      .subscribe({
        next: (data: PeliculaModel) => { this.router.navigate([""]) },
        error: (res: any) => { alert(res.error.message) }
      });
  }
  
  cancelar() {
    this.router.navigate([""]);
  }



}
