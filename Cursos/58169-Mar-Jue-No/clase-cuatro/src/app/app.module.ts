import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DisneyCharsComponent } from './components/disney-chars/disney-chars.component';
import { DisneyCharacterServiceInterface } from './services/disney-character.service.interface';
import { DisneyCharacterService } from './services/disney-character.service';

@NgModule({
  declarations: [
    AppComponent,
    DisneyCharsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ 
    { 
      provide : DisneyCharacterServiceInterface, 
      useClass:DisneyCharacterService 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
