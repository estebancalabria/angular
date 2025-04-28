import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaLenguajesComponent } from './lista-lenguajes/lista-lenguajes.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaLenguajesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
