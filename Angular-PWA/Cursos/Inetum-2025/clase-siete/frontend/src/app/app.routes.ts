import { Routes } from '@angular/router';
import { ListadoLibrosComponent } from './components/listado-libros/listado-libros.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';

export const routes: Routes = [
    { path: '', component: ListadoLibrosComponent },
    { path: 'agregar', component: AgregarLibroComponent },
];
