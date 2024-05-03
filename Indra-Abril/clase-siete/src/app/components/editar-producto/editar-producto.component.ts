import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductoModel } from '../../models/producto.model';
import { ProductoMockService } from '../../services/producto-mock.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PropNames, getObjectProps } from '../../utils/strong-typed-props';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  id: number = 0;
  producto?: ProductoModel;
  form: FormGroup;
  campos: PropNames<ProductoModel>;

  constructor(private rutaActual: ActivatedRoute,
    private router: Router,
    private service: ProductoMockService,
    private fb: FormBuilder
  ) {
    rutaActual.paramMap.subscribe((param) => {
      this.id = parseInt(param.get('id')!);
    });

    this.form = this.fb.group({
      nombre: "",
      precio: 0
    });
    this.campos = getObjectProps(this.form.value);
  }

  ngOnInit(): void {
    this.service.getById(this.id).subscribe(
      (data: ProductoModel) => {
        this.producto = data
        this.form.patchValue(this.producto);
      });
  }

  volver() {
    this.router.navigate(['/productos']);
  }

  guardar() {
    this.producto = { ...this.producto, ...this.form.value };
    this.service.update(this.producto!).subscribe(
      (data: ProductoModel) => {
        this.producto = data;
        this.router.navigate(['/productos']);
      });
  }
}
