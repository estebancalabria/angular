import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDummyService } from './services/pokemon-dummy.service';
import { PokemonServiceInterface } from './services/pokemon-interface.service';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide:PokemonServiceInterface, useClass:PokemonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
