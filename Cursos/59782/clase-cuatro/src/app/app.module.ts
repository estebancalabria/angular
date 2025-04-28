import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterServiceInterface } from './services/character.service.interface';
import { CharacterService } from './services/character.service';
import { CharacterServiceMock } from './services/character.service.mock';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:CharacterServiceInterface, useClass: CharacterService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
