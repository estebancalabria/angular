import { Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioEditarComponent } from './components/formulario-editar/formulario-editar.component';
import { FormularioAgregarComponent } from './components/formulario-agregar/formulario-agregar.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent, pathMatch: 'full' },
    //@PathVariable
    { path: 'editar/:id', component: FormularioEditarComponent }, // /editar/1 o /editar/2 o /editar/3
    { path: 'nuevo', component: FormularioAgregarComponent}
];
