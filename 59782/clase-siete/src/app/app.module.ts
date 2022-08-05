import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaPersonajeComponent } from './components/ficha-personaje/ficha-personaje.component';
import { AtacarPersonajeComponent } from './components/atacar-personaje/atacar-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaPersonajeComponent,
    AtacarPersonajeComponent
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
