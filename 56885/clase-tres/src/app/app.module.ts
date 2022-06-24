import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { ReceptorUsuarioComponent } from './components/receptor-usuario/receptor-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    ReceptorUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
