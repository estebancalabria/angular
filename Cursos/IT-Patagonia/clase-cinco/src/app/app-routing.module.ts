import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { HomeComponent } from './components/home/home.component';
import { Rutas } from './utils/rutas';

const routes: Routes = [
  { path: Rutas.PATH_HOME, component: HomeComponent },
  { path: Rutas.PATH_ADOPCIONES, component: AdopcionesComponent },
  { path: Rutas.PATH_DONACIONES, component: DonacionesComponent },
  { path: Rutas.PATH_CONTACTO, component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
