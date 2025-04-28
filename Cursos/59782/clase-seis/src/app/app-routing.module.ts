import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';

const routes: Routes = [
  { path : "", component : LibroListComponent},
  { path : "libro/editar/:id", component: LibroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
