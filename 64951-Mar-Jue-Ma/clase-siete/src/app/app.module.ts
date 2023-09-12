import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
