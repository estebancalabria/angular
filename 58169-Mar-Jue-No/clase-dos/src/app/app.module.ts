import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PublicidadComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
