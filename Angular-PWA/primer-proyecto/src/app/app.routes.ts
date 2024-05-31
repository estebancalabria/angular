import { Routes } from '@angular/router';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { FormularioEjemploComponent } from './components/formulario-ejemplo/formulario-ejemplo.component';

export const routes: Routes = [
    {path: "", component: HolaMundoComponent, pathMatch:"full"},
    {path: "formulario", component: FormularioEjemploComponent}
];
