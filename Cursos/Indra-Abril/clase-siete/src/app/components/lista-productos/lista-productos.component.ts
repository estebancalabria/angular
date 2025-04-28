import { Component } from '@angular/core';
import { ProductoMockService } from '../../services/producto-mock.service';
import { ProductoModel } from '../../models/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productos:ProductoModel[] = [];

  constructor(private service:ProductoMockService) { 

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (data:ProductoModel[]) => this.productos = data
    );
  }
}
