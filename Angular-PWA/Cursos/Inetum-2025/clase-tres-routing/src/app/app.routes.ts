import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {  path: 'home', component : HomeComponent },
    {  path: 'catalogo', component : CatalogoComponent },
    {  path: 'servicios', component : ServiciosComponent },
    {  path: 'contacto', component : ContactoComponent },
    {  path: 'servicios/servicio/:id', component : DetalleServicioComponent },
];
