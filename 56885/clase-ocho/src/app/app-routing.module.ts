import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPeliculaComponent } from './components/agregar-pelicula/agregar-pelicula.component';
import { EditarPeliculaComponent } from './components/editar-pelicula/editar-pelicula.component';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';

const routes: Routes = [
  {path:"", component:PeliculaListComponent},
  {path:"pelicula/agregar", component:AgregarPeliculaComponent},
  {path:"pelicula/editar/:id", component:EditarPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
