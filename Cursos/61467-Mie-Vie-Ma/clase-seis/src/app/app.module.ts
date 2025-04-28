import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule} from "@angular/material/card"
import { MatGridListModule } from "@angular/material/grid-list";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from "@angular/common/http";
import { LibroServiceInterface } from './services/libro.service.interface';
import { LibroHttpService } from './services/libro.http.service';
import { LibroService } from './services/libro.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BibliotecaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [{provide:LibroServiceInterface, useClass:LibroHttpService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
