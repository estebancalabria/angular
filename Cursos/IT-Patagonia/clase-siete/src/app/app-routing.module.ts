import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

const routes: Routes = [
  { path: "", component : ProductoListComponent},
  { path: "agregar", component: ProductoAddComponent},
  { path: "editar/:id", component: ProductoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
