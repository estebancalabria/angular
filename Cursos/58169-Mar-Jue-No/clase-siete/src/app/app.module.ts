import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnoFormComponent } from './components/turno-form/turno-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TurnoListComponent } from './components/turno-list/turno-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnoFormComponent,
    TurnoListComponent
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
