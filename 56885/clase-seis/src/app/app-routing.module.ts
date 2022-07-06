import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "inicio", component: InicioComponent },
  { path: "producto", component: ProductosComponent },
  { path: "categoria", component: CategoriasComponent }, 
  { path: "inventario", component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
