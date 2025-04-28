import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './components/amigos/amigos.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { FormJuegoComponent } from './components/form-juego/form-juego.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"bibilioteca",
    component:BibliotecaComponent
  },
  {
    path:"tienda",
    component:TiendaComponent
  },  
  {
    path:"amigos",
    component:AmigosComponent
  },
  {
    path:"juego/:id",
    component:FormJuegoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
