import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { RotatingTextComponent } from './components/rotating-text/rotating-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartidosComponent,
    ContactosComponent,
    ApuestasComponent,
    RotatingTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
