import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'productos', component: ListaProductosComponent},
    { path: 'editar/:id', component: EditarProductoComponent}
];
