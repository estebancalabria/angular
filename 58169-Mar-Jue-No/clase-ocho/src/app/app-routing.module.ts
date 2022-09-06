import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './component/album/album.component';
import { FiguritaComponent } from './component/figurita/figurita.component';

const routes: Routes = [
  { path:"", component:AlbumComponent},
  { path:"figurita/:id", component:FiguritaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
