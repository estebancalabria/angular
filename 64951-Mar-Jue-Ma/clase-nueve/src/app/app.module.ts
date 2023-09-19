import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPersonaComponent,
    ListadoPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
