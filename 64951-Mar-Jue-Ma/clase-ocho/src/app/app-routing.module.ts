import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditorProductoComponent } from './components/editor-producto/editor-producto.component';

const routes: Routes = [
  { path : "", component: HomeComponent },
  { path : "home", component: HomeComponent },
  { path : "producto/:id", component: EditorProductoComponent},
  { path : "producto", component: ProductosComponent },
  { path : "contacto", component: ContactosComponent },
  { path : "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
