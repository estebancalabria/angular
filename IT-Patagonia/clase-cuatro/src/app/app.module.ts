import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioInscripcionComponent } from './components/formulario-inscripcion/formulario-inscripcion.component';
import { ErrorMessagePipe } from './pipes/error-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioInscripcionComponent,
    ErrorMessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
