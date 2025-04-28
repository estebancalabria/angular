import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JuegoFormComponent } from './components/juego-form/juego-form.component';
import { JuegoListComponent } from './components/juego-list/juego-list.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"juego", component:JuegoListComponent},
  {path:"juego/:id", component:JuegoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
