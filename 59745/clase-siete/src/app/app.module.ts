import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { FormJuegoComponent } from './components/form-juego/form-juego.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BibliotecaComponent,
    TiendaComponent,
    AmigosComponent,
    FormJuegoComponent
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
