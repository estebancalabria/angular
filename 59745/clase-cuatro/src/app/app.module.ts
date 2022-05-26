import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CancionFormComponent } from './components/cancion-form/cancion-form.component';
//import { NotTodayValidatorDirective } from './utils/not-today-validator-directive';

@NgModule({
  declarations: [
    AppComponent,
    CancionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
