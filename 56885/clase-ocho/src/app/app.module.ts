import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';
import { AgregarPeliculaComponent } from './components/agregar-pelicula/agregar-pelicula.component';
import { EditarPeliculaComponent } from './components/editar-pelicula/editar-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaListComponent,
    AgregarPeliculaComponent,
    EditarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
