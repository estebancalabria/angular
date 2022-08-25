import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListaTicketsComponent } from './components/lista-tickets/lista-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaTicketsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
