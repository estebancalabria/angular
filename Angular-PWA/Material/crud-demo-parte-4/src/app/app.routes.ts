import { Routes } from '@angular/router';
import { ListadoContactosComponent } from './components/listado-contactos/listado-contactos.component';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { DetalleContactoComponent } from './components/detalle-contacto/detalle-contacto.component';
import { EditarContactoComponent } from './components/editar-contacto/editar-contacto.component';

export const routes: Routes = [
    { path: '', component: ListadoContactosComponent },
    { path: 'contactos', component: ListadoContactosComponent },
    { path: 'contactos/nuevo', component: CrearContactoComponent }, 
    { path: 'contacts/:id', component: DetalleContactoComponent }, 
    { path: 'contacts/editar/:id', component: EditarContactoComponent } 
  ];