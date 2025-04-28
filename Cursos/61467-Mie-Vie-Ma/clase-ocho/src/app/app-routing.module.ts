import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';

const routes: Routes = [
  { path: "", component: ProveedorListComponent },
  { path: "editar/:id", component: ProveedorFormComponent },
  { path: "agregar", component:ProveedorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
