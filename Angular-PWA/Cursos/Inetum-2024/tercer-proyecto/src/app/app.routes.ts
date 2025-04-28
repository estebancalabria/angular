import { Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioEditarComponent } from './components/formulario-editar/formulario-editar.component';
import { FormularioAgregarComponent } from './components/formulario-agregar/formulario-agregar.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: ListadoComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    //@PathVariable
    { path: 'editar/:id', component: FormularioEditarComponent, canActivate: [AuthGuard] }, // /editar/1 o /editar/2 o /editar/3
    { path: 'nuevo', component: FormularioAgregarComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent}
];
