import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibroFormComponent } from './components/libro-form/libro-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroListComponent,
    LibroFormComponent
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
