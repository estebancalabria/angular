import { Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { AgregarPeliculaComponent } from './components/agregar-pelicula/agregar-pelicula.component';

export const routes: Routes = [
    {path:"", component:ListadoPeliculasComponent},
    {path:"agregar", component:AgregarPeliculaComponent},
];
