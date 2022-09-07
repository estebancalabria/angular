import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { HomeComponent } from './components/home/home.component';
import { PartidosComponent } from './components/partidos/partidos.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "partidos", component: PartidosComponent },
  { path: "apuestas", component: ApuestasComponent },
  { path: "contactos", component: ContactosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
